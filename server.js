const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers/index'); 

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

//Configure session and cookies
app.use(session({
   // Secret key used to sign the session ID cookie
  secret: process.env.SESSION_SECRET,
  // Use Sequelize to store session data in the database
  store: new SequelizeStore({
    // Pass the Sequelize instance to the store
    db: sequelize,
  }),
   // Do not save the session back to the store if it was never modified during the request
  resave: false,
  // Forces a session that is "uninitialized" to be saved to the store. Useful for implementing login sessions.
  saveUninitialized: false,
  cookie: {
    // maxAge: 1000 * 60 * 60 * 24, // 24 hours
    maxAge: 60000,
  },
}));

// Set up Handlebars.js as the template engine test 
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
// app.use(authRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
});
