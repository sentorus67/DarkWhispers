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
    const newScenario = await Scenario.create({ title, description, choices });
    res.status(201).json(newScenario);
  } catch (err) {
    console.error('Error creating scenario:', err);
    res.status(500).json({ error: 'Failed to create scenario' });
  }
};

// Update an existing scenario
exports.updateScenario = async (req, res) => {
  try {
    const [updated] = await Scenario.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updated) {
      res.status(404).json({ error: 'Scenario not found' });
      return;
    }

    const updatedScenario = await Scenario.findByPk(req.params.id);
    res.status(200).json(updatedScenario);
  } catch (err) {
    console.error('Error updating scenario:', err);
    res.status(500).json({ error: 'Failed to update scenario' });
  }

  // try {
  //   const { id } = req.params;
  //   const { title, description, choices } = req.body;

  //   // Find the scenario by id
  //   const scenario = await Scenario.findByPk(id);

  //   if (!scenario) {
  //     return res.status(404).send('Scenario not found');
  //   }

  //   // Update the scenario
  //   scenario.title = title;
  //   scenario.description = description;
  //   scenario.choices = choices;
  //   await scenario.save();

  //   res.status(200).json(scenario);
  // } catch (err) {
  //   res.status(500).send(err.message);
  // }
};

// Delete a scenario
exports.deleteScenario = async (req, res) => {
  try {
    const deleted = await Scenario.destroy({
      where: { id: req.params.id },
    });

    if (!deleted) {
      res.status(404).json({ error: 'Scenario not found' });
      return;
    }

    res.status(204).end();
  } catch (err) {
    console.error('Error deleting scenario:', err);
    res.status(500).json({ error: 'Failed to delete scenario' });
  }

  // try {
  //   const { id } = req.params;

  //   // Find the scenario by id
  //   const scenario = await Scenario.findByPk(id);

  //   if (!scenario) {
  //     return res.status(404).send('Scenario not found');
  //   }

  //   // Delete the scenario
  //   await scenario.destroy();

  //   res.status(204).send();
  // } catch (err) {
  //   res.status(500).send(err.message);
  // }
};
