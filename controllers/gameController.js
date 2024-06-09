const { Scenario, GameState } = require('../models');

// Get the current scenario and choices for a user
const getCurrentScenario = async (req, res) => {
  try {
    const userId = req.session.userId;
    const gameState = await GameState.findOne(
      {
        where: {
          user_id: userId
        }
      });

    if (!gameState) {
      return res.status(404).json({ message: 'Game state not found' });
    }

    const scenario = await Scenario.findByPk(gameState.current_scenario_id);

    res.json({ scenario, gameState });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update the game state based on user choice
const updateGameState = async (req, res) => {
  try {
    const userId = req.session.userId;
    const { choiceId } = req.body;

    const gameState = await GameState.findOne(
      {
        where: {
          user_id: userId
        }
      });

    const currentScenario = await Scenario.findByPk(gameState.current_scenario_id);

    const choice = currentScenario.choices.find(choice => choice.choice_id === choiceId);

    if (!choice) {
      return res.status(400).json({ message: 'Invalid choice' });
    }

    // Update game state logic based on the choice outcome
    gameState.state = {
      ...gameState.state,
      lastChoice: choice.description,
      outcome: choice.outcome,
    };

    // Assuming the choice leads to a new scenario
    gameState.current_scenario_id = choice.next_scenario_id;

    await gameState.save();
    res.json({ message: 'Game state updated', gameState });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCurrentScenario,
  updateGameState,
};

// =========================================
// // GET all games
// router.get('/', async (req, res) => {
//   try {
//     const gameData = await Game.findAll();
//     res.status(200).json(gameData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // POST a new game
// router.post('/', async (req, res) => {
//   try {
//     const newGame = await Game.create(req.body);
//     res.status(200).json(newGame);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });