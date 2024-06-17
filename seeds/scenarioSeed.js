const { Scenario } = require('../models');

const scenarioData = [
  {
    id: 1, // Manually set ID for testing
    game_id: 1, // Assuming Dark Whispers has ID 1
    title: 'The Beginning',
    description: 'Your journey begins in the dark forest. The evening sun rest upon trees. The path, unkempt, winds in a manner of directions.',
   

    // manually added for testing

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

    description: 'As you travel north, you see the husky trees clear up. the buzzing of insects fading. At a distance you can see the vauge shape of buildings. It must be a village!',


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

    description: 'As you journey eastward you can hear the croaks of critters and the crunching of leaves. Soon the sound of flowing water approaches, a wide stream blocks your path.',

// manually added for testing

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
    description: ' You find the village to be Barren. Huts detroyed and fields razed. No signs of people could be found except for discarded socks. As you stroll thrpugh the empty town you see a grizzly bear burst through a window and rush towards you, teeth snarling',

// manually added for testing

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
  {
    id: 5, // Manually set ID for testing
    game_id: 1,

    title: ' Game Over',
    description: '  You stand your ground and punch the bear. It barely flinches from the attack before it descends upon you. You are soon ripped to shreds (END).',


    choices: [
      {
        choice_id: 9,
        description: 'Try again (from the beginning)',
        next_scenario_id:  1,
      },
      {
        choice_id: 10,
        description: 'Try again (from last option)',
        next_scenario_id:  4,
      }
    ],
  },
  {
    id: 6, // Manually set ID for testing
    game_id: 1,

    title: ' Victory',
    description: 'You wield your blade and swipe at the beast. you only scratch the top of the bears forehead, but luckily the bear gets startled, It flees into cavern that has the sign "Temple" upon it. Surely thats where treasure lies.',

// manually added for testing

    choices: [
      {
        choice_id: 11,
        description: 'Venture forward',
        next_scenario_id: 9,
      },
    ],
  },
  {
    id: 7, // Manually set ID for testing
    game_id: 1,
    title: 'Game Over',

    description: 'You attempt to run away from the beast. Sadly this bear is disturbingly fast, by the time you pick up speed the bear reappers in front of you, and in one motion, you are swallowed whole. (END).',

// manually added for testing

    choices: [
      {
        choice_id: 12,
        description: 'Try again (from beginning)',
        next_scenario_id:1, 
      },
      {
        choice_id: 13,
        description: 'Try again (from last option)',
        next_scenario_id: 4,
      },
    ],
 },
 { 
  id: 8,
  game_id: 1,
  title: 'A fortunate meeting',
  description: 'Wading through the river you trip and fall face first into the water. luckyily shallow you gather your bearings, but not before something glint in the water cathes your eye. You investigate to see a golden pair of scissors. You hold on to it, surely this will be useful.',
   key_item: 1,
  choices: [
    {
      choice_id: 14,
      description: 'Travel north',
      next_scenario_id:9, 
    },
  ],
},
  { 
    id: 9,
    game_id: 1,

    title: 'The Treasure Cavern',
    description: 'Entering the Cavern, you see inside is much more intricate than what the outer walls would lead you to believe. inside are many images depicting people holding something that radiates light, as you travel deeper and deeper you hear a click underneath your foot. Soon from behind a massive boulder begins to tumble and roll towards you!',

  // manually added for testing

    choices: [
      {
        choice_id: 15,
        description: 'Attack',
        next_scenario_id: 10,
      },
      {
        choice_id: 16,
        description: 'Dive for cover',
        next_scenario_id: 11,

      },
      {
        choice_id: 17,
        description: 'Cry loudly',
        next_scenario_id: 12,

      },
    ],
 },
 { 
  id: 10,
  game_id: 1,
  title: 'Game Over',
  description: 'You attack the Rock with your Scissors, but its not strong enough, and soon you become paper.(END)',
  choices: [
    {
      choice_id: 18,
      description: 'Try Again (From beginning)',
      next_scenario_id:1, 
    },
    {
      choice_id: 19,
      description: 'Try Again(From last option)',
      next_scenario_id:9, 
    },
  ],
},
{ //11
  id: 11,
  game_id: 1,
  title: 'A Close Call',
  description: 'You dive into a convient person shaped hole. The boulder soon rushes past you, leaving you in perfect 3-dimensional form. With the weight lifted off you, you continue your exploration. You can feel the treasure close now.',
  choices: [
    {
      choice_id: 20,
      description: 'Venture forward',
      next_scenario_id:13, 
    },
  ],
},
{ //12
  id: 12,
  game_id: 1,
  title: 'Game Over',
  description: 'you get into a fetal position and cry, loudly. Your eyes and nose endelssy run as you let out a blood curdling weap. The boulder stops in its tracks, too embarrassed to keep going. It considers comforting you, but its a boulder and cant talk, rolls aways to avoid confronting this. While the boulder is gone you find yourself deeply embarrassed with what you did. You have no will to continue on, and as such go home empty-handed. (END))',
  choices: [
    {
      choice_id: 21,
      description: 'Try Again (From beginning)',
      next_scenario_id:1, 
    },
    {
      choice_id: 22,
      description: 'Try Again(From last option)',
      next_scenario_id:9, 
    },
  ],
},
{ //13
  id: 13,
  game_id: 1,
  title: 'The Final challenge',
  description: 'At the very depths of the cavern you find yourself in a room, made of pristine gold. Jewels of all sizes adorn the walls and ceiling. In the center lies a pedestal with a wither tablet. it reads: "For those that seek the promised treasure, Awnser thine riddle with clarity. When must a left-handed man and a right-handed man use the same hand? ',
  choices: [
    {
      choice_id: 23,
      description: 'To hold a fork.',
      next_scenario_id:14, 
    },
    {
      choice_id: 24,
      description: 'To raise a shield',
      next_scenario_id:14, 
    },
    {
      choice_id: 25,
      description: 'To shoot a bow',
      next_scenario_id:14, 
    },
    {
      choice_id: 26,
      description: 'To shake hands',
      next_scenario_id:15, 
    },
    {
      choice_id: 27,
      description: 'To say a prayer',
      next_scenario_id:14, 
    },
    {
      choice_id: 28,
      description: 'To wear a ring',
      next_scenario_id:14, 
    },
  ],
},
{ //14
  id: 14,
  game_id: 1,
  title: 'Game Over',
  description: 'You state your awnser. "Incorrect" a voice booms arounds you. Suddenly both the boulder and grizzly bear from earlier ambush you before you get the chance to react. The Bear punches you in the Jaw then the Boulder sets you on fire. You are no longer alive. (END)',
  choices: [
    {
      choice_id: 29,
      description: 'Try Again (From beginning)',
      next_scenario_id:1, 
    },
    {
      choice_id: 30,
      description: 'Try Again(From last option)',
      next_scenario_id:13, 
    },
  ],
},
{ //15
  id: 15,
  game_id: 1,
  title: 'Correct',
  description: 'You state your awnser. "The ground rumbles as the room begins to split. Light instensily radiates from the tabled, blinding you. Once it fades you see the treasure, floating in front of you. An unopened can of Nutella. Despite your nut Allergies, you take the prize and Return home. You enjoy a nice spread over toast inside your million-dollar mansion, before going to the Hospital because you have a serious nut allergy. Life is Good."',
  choices: [
    {
      choice_id: 31,
      description: 'Victory',
      next_scenario_id:16, 
    },
  ],
},
{ //16
  id: 16,
  game_id: 1,
  title: 'Congratulations',
  description: 'Thank you for Playing the first ever game in Dark Whispers. More to come (maybe), but feel free to try out other paths.',
  choices: [
    {
      choice_id: 31,
      description: 'Replay(from beginning)',
      next_scenario_id:1, 
    },
  ],
}


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
