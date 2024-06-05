const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./models');

const app = express();

// Session store
const store = new SequelizeStore({
  db: db.sequelize,
});

app.use(session({
  secret: process.env.SESSION_SECRET,
  store: store,
  resave: false,
  saveUninitialized: false,
}));

store.sync();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Your routes and other middleware here

module.exports = app;
