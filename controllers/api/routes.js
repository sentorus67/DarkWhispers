// const path = require('path');
// const express = require('express');
// const session = require('express-session');
// const exphbs = require('express-handlebars');
// const routes = require('./controllers/index'); // Ensure this path is correct
// const authRoutes = require('./controllers/api/authRoutes');

// const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Configure session and cookies
// const sess = {
//   secret: process.env.SESSION_SECRET,
//   cookie: {
//     maxAge: 300000,
//     httpOnly: true,
//     secure: false,
//     sameSite: 'strict',
//   },
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));

// // Set up Handlebars.js as one of the template engines
// app.engine('handlebars', exphbs.engine());
// app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, 'views'));

// // Set up EJS as another template engine
// app.engine('ejs', require('ejs').__express);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
// });
