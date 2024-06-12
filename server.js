const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers/index'); // Ensure this path is correct
const authRoutes = require('./controllers/api/index');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

//Configure session and cookies

const sess = {
  // Secret key used to sign the session ID cookie
  secret: process.env.SESSION_SECRET,
  cookie: {
    // Maximum age of the cookie in milliseconds (300000 ms = 5 minutes)
    maxAge: 300000,
    // Indicates that the cookie should be accessible only by the web server, not by client-side JavaScript
    httpOnly: true,
    // Indicates that the cookie should only be sent over HTTPS. Set to false because this is likely in development.
    secure: false,
    // Indicates that the cookie should only be sent with requests from the same site. This helps prevent CSRF attacks.
    sameSite: 'strict',
  },
  // Do not save the session back to the store if it was never modified during the request
  resave: false,
  // Forces a session that is "uninitialized" to be saved to the store. Useful for implementing login sessions.
  saveUninitialized: true,
  // Use Sequelize to store session data in the database
  store: new SequelizeStore({
    // Pass the Sequelize instance to the store
    db: sequelize,
  }),
};

// app.use(session(sess));

// Set up Handlebars.js as the template engine test 
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
app.use(authRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
});
