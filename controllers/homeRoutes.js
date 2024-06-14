const express = require('express');
const router = express.Router();
const { Game, Scenario, User, Adventurer } = require('../models');
// const { Game, Scenario, User, Adventurer } = require('../models');
const withAuth = require('../utils/auth')
const ensureAdmin = require('../middleware/adminMiddleware');
const { FLOAT } = require('sequelize');

// Render homepage
router.get('/', async (req, res) => {
  try {

    const games = await Game.findAll();

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
    if (req.session.logged_in) {
      res.redirect('./partials/game');
      return;
    } else{
    res.render('./partials/login');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render register page
router.get('/register', async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.render('./partials/game');
      return;
    }
    res.render('./partials/register');
  } catch (err) {
    res.status(500).json(err);
  }
});

//can delete bypass once testing is done
router.get('/bypass', async (req, res) => {
  try {
    res.render('./partials/game', {
      loggedIn: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render game page
router.get('/game', /**withAuth,*/ async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/game');
      return;
    }

    res.render('./partials/scenario');

  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/newGame/:id', async (req, res) => {
  try {
    // const adventurerData= await Adventurer.findByPk(req.params.id);
    const newAdventure=await Adventurer.update(
      {hasKeyItem1: false, hasKeyItem2: false,hasKeyItem3: false}, 
      {where: {game_id: req.params.id}},
    );
   
    // const adventurer= adventurerData.get({ plain: true });

    res.render('./partials/scenario');
  } catch (err) {
    console.error('Error fetching scenarios:', err);
    res.status(200).json({ error: 'Failed to fetch scenarios' });
  }
});

router.get('/continue/:id', async(req,res)=>{
  try{

    const adventurerData= await Adventurer.findOne({
      where: {user_id: req.params.id}
    });

    const scenarioData = await Scenario.findByPk(adventurerData.scenario_id);
    const scene = scenarioData.get({ plain: true });
    const sceneChoices = JSON.parse(scene.choices);
    res.render('./partials/scenario', {
      loggedIn: true,
      nowPlaying: true,
      scene,
      sceneChoices,
      layout: 'main'  // Handlebars
    });
  }
  catch (err) {
    console.error('Error fetching scenarios:', err);
    res.status(200).json({ error: 'Failed to fetch scenarios' });
  }
});


router.get('/scenario/:id', async (req, res) => {
  try {
    let scenarioData;
    if((req.params.id).includes('.')){
      //this logic trigger if the scenario_id has a decimal. Indicating it has abrnaching path.
      branch= req.params.id;
   
      keyItemCheck=parseInt(branch.substring(branch.indexOf('.')+1,((branch.indexOf('.'))+2)));

      branchPath1= parseInt(branch.substring(0,branch.indexOf('.')));
      branchPath2= parseInt(branch.substring((branch.indexOf('.'))+2));

      scenarioData= await Scenario.findByPk(branchPath1);
      let scene = scenarioData.get({ plain: true });

      const adventurerData= await Adventurer.findOne({
        where: {user_id: scene.game_id}
      });

      const adventurer= adventurerData.get({ plain: true });

      //this checks if the value of key item exists.
      switch(keyItemCheck){
        case 1:
          if(adventurer.hasKeyItem1==true){
            scenarioData = await Scenario.findByPk(branchPath2);
          };
          break;
        case 2:
          if(adventurer.hasKeyItem2==true){
            scenarioData = await Scenario.findByPk(branchPath2);
          }
        break;

        case 3:
          if(adventurer.hasKeyItem3==true){
            scenarioData = await Scenario.findByPk(branchPath2);
          }
        break;
      }
    }
    else{
     scenarioData = await Scenario.findByPk(req.params.id);
    }

    scene = scenarioData.get({ plain: true });
    
    if(scene.key_item != null){
  
      console.log('A key item is present adding it to adveturer');
      // const adventurerData= await Adventurer.findOne({
      //   where: {user_id: scene.game_id}
      // });
      let adventurerKeyItem;
      obtainKeyItem=parseInt(scene.key_item);
      switch(obtainKeyItem){

        case 1:
           adventurerKeyItem = await Adventurer.update(
            {hasKeyItem1: true},
            {where: {game_id: scene.game_id}},
          );
        break;
          
        case 2:
           adventurerKeyItem = await Adventurer.update(
            {hasKeyItem2: true},
            {where: {game_id: scene.game_id}},
          );
        break;

        case 3:
           adventurerKeyItem = await Adventurer.update(
          {hasKeyItem3: true},
          {where: {game_id: scene.game_id}},
           );
        break;
      }
      const adventurerData= await Adventurer.findOne({
        where: {user_id: scene.game_id}
      });
      const adventurer= adventurerData.get({ plain: true });

      // console.log(`adventurer should now have a key item: this is ${adventurer.hasKeyItem1}`);
     
    }
    const sceneChoices = JSON.parse(scene.choices);
     await Adventurer.update(
      {scenario_id: scene.id},
      {where: {game_id: scene.game_id }},
      );
    res.render('./partials/scenario', {
      loggedIn: true,
      nowPlaying: true,
      scene,
      sceneChoices,
      layout: 'main'  // Handlebars
    });

  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Render admin page
router.get('/admin', withAuth, ensureAdmin, async (req, res) => {
  try {
      const users = await User.find();
      res.render('./partials/admin', {
          users: users.map(user => user.get({ plain: true })),
      });
  } catch (err) {
      res.status(500).json(err);

  }
});

module.exports = router;

