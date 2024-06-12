const { Scenario } = require('../models');


//   {
//     game_id: 1,
//     title: '',
//     description: '',
//     choices: [
//       {
//         choice_id: 1,
//         description: '',
//         next_scenario_id: 
//       },
//       {
//         choice_id: 2,
//         description: '',
//         next_scenario_id: 

//       },
//     ],
//  }


const scenarioData = [
  {// 1 Manually set ID for testing
   
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
  {// 2 Manually set ID for testing
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
  { // 3  Manually set ID for testing
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
  { //4 
    game_id: 1,
    title: 'A crucial Encounter',
    description: ' You find the village to be Barren. Huts detroyed and fields razed. In its wake you see a bear run towards you.',
    choices: [
      {
        choice_id: 7,
        description: 'Fight back',
        next_scenario_id: 5.16,
      },
      {
        choice_id: 8,
        description: 'Run away',
        next_scenario_id: 7,

      },
    ],
 },
  { //5
    game_id: 1,
    title: ' Game Over',
    description: ' You pucnh the bear in the nose. Unfortunately it wasnt enough and the beast mauls you to shreds.',
    choices: [
      {
        choice_id: 9,
        description: ' Try again (from the beginning)',
        next_scenario_id:  1,
      },
      {
        choice_id: 10,
        description: ' Try again (from last option)',
        next_scenario_id:  4,
      }
    ],
 },
  { //6
    game_id: 1,
    title: ' Victory',
    description: 'You weild your blade and give the bear a clean haircut. The bear, statisfied with its cut leaves you a $8 tip and wanders off.',
    choices: [
      {
        choice_id: 11,
        description: 'Venture forward',
        next_scenario_id: 8,
      },
    ],
 },
  { //7
    game_id: 1,
    title: 'Game Over',
    description: 'You attempt to run away from the beast. Unfortenaly it knows how to teleport. it pops in front of you and eats you.',
    choices: [
      {
        choice_id: 12,
        description: 'try again (from beginning)',
        next_scenario_id:1, 
      },
      {
        choice_id: 13,
        description: 'Try again (from last option)',
        next_scenario_id: 4,

      },
    ],
 },
 { //8
  game_id: 1,
  title: 'Discover something',
  description: 'Wading through the river you discover an piece of Iron. It is a magic sword! Surely this will be useful.',
  key_item: 1,
  choices: [
    {
      choice_id: 12,
      description: 'Travel north',
      next_scenario_id:2, 
    },
  ],
}

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
