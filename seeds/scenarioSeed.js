const { Scenario } = require('../models');

const scenarioData = [
  {
    id: 1, // Manually set ID for testing
    game_id: 1, // Assuming Dark Whispers has ID 1
    title: 'The Beginning',
    description: 'You find yourself in a dark forest. Paths lead north and east.',
    choices: [
      {
        choice_id: 1,
        description: 'Go north',
        next_scenario_id: 2,
      },
      {
        choice_id: 2,
        description: 'Go east',
        next_scenario_id: 3,
      },
    ],
  },
  {
    id: 2, // Manually set ID for testing
    game_id: 1,
    title: 'The Northern Path',
    description: 'The path leads to a small village.',
    choices: [
      {
        choice_id: 3,
        description: 'Enter the village',
        next_scenario_id: 4,
      },
      {
        choice_id: 4,
        description: 'Turn back',
        next_scenario_id: 1,
      },
    ],
  },
  {
    id: 3, // Manually set ID for testing
    game_id: 1,
    title: 'The Eastern Path',
    description: 'The path leads to a river.',
    choices: [
      {
        choice_id: 5,
        description: 'Cross the river',
        next_scenario_id: 5,
      },
      {
        choice_id: 6,
        description: 'Turn back',
        next_scenario_id: 1,
      },
    ],
  },
];

const seedScenarios = async () => {
  await Scenario.bulkCreate(scenarioData.map(scenario => ({
    ...scenario,
    choices: JSON.stringify(scenario.choices), // Convert choices array to JSON string
  })), {
    ignoreDuplicates: true
  });
};

module.exports = seedScenarios;
