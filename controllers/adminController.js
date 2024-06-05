const { Scenario } = require('../models');

exports.createScenario = async (req, res) => {
  try {
    const { title, description, choices } = req.body;

    // Create a new scenario
    const scenario = await Scenario.create({ title, description, choices });
    res.status(201).json(scenario);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateScenario = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, choices } = req.body;

    // Find the scenario by id
    const scenario = await Scenario.findByPk(id);

    if (!scenario) {
      return res.status(404).send('Scenario not found');
    }

    // Update the scenario
    scenario.title = title;
    scenario.description = description;
    scenario.choices = choices;
    await scenario.save();

    res.status(200).json(scenario);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteScenario = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the scenario by id
    const scenario = await Scenario.findByPk(id);

    if (!scenario) {
      return res.status(404).send('Scenario not found');
    }

    // Delete the scenario
    await scenario.destroy();

    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
