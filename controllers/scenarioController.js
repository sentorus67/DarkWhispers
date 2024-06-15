const { Scenario } = require('../models');
// Get a single scenario by ID
exports.getScenarioById = async (req, res) => {
  try {
    const scenario = await Scenario.findByPk(req.params.id);
    if (!scenario) {
      res.status(404).json({ error: 'Scenario not found' });
      return;
    }
    res.status(200).json(scenario);
  } catch (err) {
    console.error('Error fetching scenario:', err);
    res.status(500).json({ error: 'Failed to fetch scenario' });
  }
};

// Create a new scenario
exports.createScenario = async (req, res) => {
  try {
    const { title, description, choices } = req.body;

    // Create a new scenario in the database
    await Scenario.create({
      title,
      description,
      choices: JSON.stringify(choices)
    });

    // Redirect to the admin page with a success parameter
    res.redirect('/admin?success=true');
  } catch (err) {
    console.error('Error creating scenario:', err);
    if (!res.headersSent) {
      res.status(500).json({ error: 'An error occurred while creating the scenario.' });
    }
  }
};

// Update an existing scenario
// exports.updateScenario = async (req, res) => {
//   try {
//     const [updated] = await Scenario.update(req.body, {
//       where: { id: req.params.id },
//     });

//     if (!updated) {
//       res.status(404).json({ error: 'Scenario not found' });
//       return;
//     }

//     const updatedScenario = await Scenario.findByPk(req.params.id);
//     res.status(200).json(updatedScenario);
//   } catch (err) {
//     console.error('Error updating scenario:', err);
//     res.status(500).json({ error: 'Failed to update scenario' });
//   }

  // // Delete a scenario
  // exports.deleteScenario = async (req, res) => {
  //   try {
  //     const deleted = await Scenario.destroy({
  //       where: { id: req.params.id },
  //     });

  //     if (!deleted) {
  //       res.status(404).json({ error: 'Scenario not found' });
  //       return;
  //     }

  //     res.status(204).end();
  //   } catch (err) {
  //     console.error('Error deleting scenario:', err);
  //     res.status(500).json({ error: 'Failed to delete scenario' });
  //   }

  // }
// };