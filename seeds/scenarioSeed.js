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
        next_scenario_id: 8,
      },
      {
        choice_id: 6,
        description: 'Turn back',
        next_scenario_id: 1,
      },
    ],
  },
  {
    id: 4, // Manually set ID for testing
    game_id: 1,
    title: 'A crucial Encounter',
    description: 'You find the village to be Barren. Huts destroyed and fields razed. In its wake, you see a bear run towards you.',
    choices: [
      {
        choice_id: 7,
        description: 'Fight back',
        next_scenario_id: 5,
      },
      {
        choice_id: 8,
        description: 'Run away',
        next_scenario_id: 7,
      },
    ],
  },
  {
    id: 5, // Manually set ID for testing
    game_id: 1,
    title: 'Game Over',
    description: 'You punch the bear in the nose. Unfortunately, it wasn\'t enough and the beast mauls you to shreds.',
    choices: [
      {
        choice_id: 9,
        description: 'Try again (from the beginning)',
        next_scenario_id: 1,
      },
      {
        choice_id: 10,
        description: 'Try again (from last option)',
        next_scenario_id: 4,
      },
    ],
  },
  {
    id: 6, // Manually set ID for testing
    game_id: 1,
    title: 'Victory',
    description: 'You wield your blade and give the bear a clean haircut. The bear, satisfied with its cut, leaves you an $8 tip and wanders off.',
    choices: [
      {
        choice_id: 11,
        description: 'Venture forward',
        next_scenario_id: 8,
      },
    ],
  },
  {
    id: 7, // Manually set ID for testing
    game_id: 1,
    title: 'Game Over',
    description: 'You attempt to run away from the beast. Unfortunately, it knows how to teleport. It pops in front of you and eats you.',
    choices: [
      {
        choice_id: 12,
        description: 'Try again (from the beginning)',
        next_scenario_id: 1,
      },
      {
        choice_id: 13,
        description: 'Try again (from last option)',
        next_scenario_id: 4,
      },
    ],
  },
  {
    id: 8, // Manually set ID for testing
    game_id: 1,
    title: 'Discover something',
    description: 'Wading through the river you discover a piece of iron. It is a magic sword! Surely this will be useful.',
    key_item: 1,
    choices: [
      {
        choice_id: 14,
        description: 'Travel north',
        next_scenario_id: 2,
      },
    ],
  },
];

const seedScenarios = async () => {
  await Scenario.bulkCreate(
    scenarioData.map(scenario => ({
      ...scenario,
      choices: JSON.stringify(scenario.choices), // Convert choices array to JSON string
    })),
    {
      ignoreDuplicates: true,
    }
  );
};

module.exports = seedScenarios;
