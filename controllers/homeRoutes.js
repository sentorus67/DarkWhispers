const express = require('express');
const router = express.Router();

router.get('/', async(req,res)=> {
    res.render('./partials/game');
});

router.get('/login', async(req,res)=> {
    return res.render('./partials/login');
});

router.get('/register', async(req,res) =>{
    return res.render('./partials/register');
});

router.get('/bypass',async (req,res) => {
     res.render('./partials/game', {
    loggedIn: true
    });
});


module.exports = router;
