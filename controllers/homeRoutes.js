const express = require('express');
const router = express.Router();
const { Game, Scenario, User } = require('../models');
const withAuth = require('../utils/auth')

// Render homepage
router.get('/', async (req, res) => {
  try {
    
    const games = await Game.findAll({
      // include: [
      //   {
      //     model: User,
      //     attributes: ['name'],
      //   },
      // ],
    });

    res.render('./partials/game', {
      games: games.map(game => game.get({ plain: true })),
      
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// Render login page
router.get('/login', async (req, res) => {
  try {
    res.render('./partials/login');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render register page
router.get('/register', async (req, res) => {
  try {
    res.render('./partials/register');
  } catch (err) {
    res.status(500).json(err);
  }
});

//can delete bypass once testing is done
router.get('/bypass', async (req, res) => {
  try {
    res.render('./partials/game' , {
        loggedIn: true
        });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render game page

router.get('/game', /**withAuth,*/ async (req, res) => {
  try {
    res.render('./partials/scenario' , {
        loggedIn: true
        });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/scenario/:id', async (req,res) =>{
  try{
    const scenarioData= await Scenario.findByPk(req.params.id);
    const scene= scenarioData.get({plain: true});

    const sceneChoices= JSON.parse(scene.choices);



    res.render('./partials/scenario',{
      loggedIn: true,
      nowPlaying: true,
      scene,
      sceneChoices
    });
  }
  catch(err){
    console.log(err);
    res.status(500).json(err);
  }
})

//Render admin page
router.get('/admin', /**withAuth*/ async (req, res) => {
    try {
      // // Find the logged in user based on the session ID
      // const userData = await User.findByPk(req.session.user_id, {
      //   attributes: { exclude: ['password'] },
      //   include: [{ model: Scenario }],
      // });
  
      // const user = userData.get({ plain: true });
  
      res.render('./partials/admin', {
        // ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
});


  

module.exports = router;
