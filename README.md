<div align='center'>
  
# Dark Whispers

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://nodejs.org/en) 
  [![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
  [![Sequelize.js](https://img.shields.io/badge/sequelize-323330?logo=sequelize&logoColor=blue)](https://sequelize.org/docs/v6/)
  [![Postgresql](https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
  [![Insomnia](https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=white)](https://insomnia.rest/)
  ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/cnm724/SVG-Logo-Creator?color=B200FF)
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  ![Static Badge](https://img.shields.io/badge/bcrypt.js-blue?color=maroon)

  
</div>

## Table of Contents (Optional)

- [Description](#description)
- [Live-URL](#live-url)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Technologies-Used](#technologies-used)
- [Credits](#credits)
- [License](#license)


## Description

Dark Whispers is an interactive text-based adventure game designed to provide users with a captivating and immersive experience. The project is built using modern web development technologies and follows the Model-View-Controller (MVC) architectural pattern to ensure a clear separation of concerns and maintainability. The primary stack used includes Node.js, Express.js, Sequelize ORM for database management, Handlebars.js for templating, and Bulma CSS for styling.

### Features

#### User Authentication:

 Users can register and log in to access their game progress.
Authentication is handled using sessions and JWT tokens for secure and scalable user management.
Passwords are securely hashed using bcrypt before storing them in the database.

#### Admin Toolkit:

 Admin users have access to an Admin Toolkit that allows them to manage game scenarios and monitor user activities.
Admin functionalities are protected and only accessible to users with the admin role.

##### Game Mechanics:

 The game features multiple scenarios where users make choices that affect the outcome.
Game state management ensures that user progress is saved and can be continued later.

#### Responsive Design:

 The UI is styled using Bulma CSS to ensure a modern and responsive design.
Users can interact with the game on various devices, including desktops, tablets, and mobile phones.

## Challenges Faced

#### Server Issues:

 One of the primary challenges encountered was related to server configuration and session management.
Initial attempts to set up the server resulted in multiple errors, including issues with session storage and route handling.
Debugging these issues required a deep dive into the Express.js session middleware and Sequelize integration.

#### User Authentication and Registration:

 Ensuring secure user authentication was critical. Implementing bcrypt for password hashing and managing JWT tokens for session management was a complex task.
Handling errors such as duplicate email registrations and invalid login credentials required careful validation and error messaging.
Implementing middleware to protect routes and ensure only authenticated users could access certain pages was another challenge.

####  MVC Implementation:

Structuring the application following the MVC pattern required careful planning and organization.
Defining clear roles for models, views, and controllers helped in maintaining a clean codebase but also posed challenges in terms of data flow and management.
Controllers were designed to handle business logic and interact with models, ensuring that views remained presentation-focused.

#### Database Management with Sequelize ORM:

 Using Sequelize ORM to manage database operations required understanding its query methods and associations.
Issues such as syncing models, handling migrations, and seeding the database with initial data were tackled.
Ensuring data integrity and handling complex queries, especially for game state management, was a significant challenge.

## Technical Stack

#### Node.js & Express.js:

 The backend of the application is built on Node.js with Express.js providing a robust framework for handling routes, middleware, and server configuration.

#### Sequelize ORM:

 Sequelize is used for Object-Relational Mapping (ORM) to interact with the PostgreSQL database.
It simplifies database queries and provides a clear structure for defining models and their relationships.

#### Handlebars.js:

 Handlebars.js is used as the templating engine to render dynamic HTML content.
It supports layouts and partials, making it easier to maintain and reuse UI components.

#### Bulma CSS:

 Bulma CSS framework is used for styling, offering a modern and responsive design out of the box.
It ensures a consistent and visually appealing user interface.

## Learning Outcomes

#### MVC Architecture:

 Implementing the MVC pattern helped in understanding the importance of separating concerns in web applications.
It improved the maintainability and scalability of the codebase.

#### Security Best Practices:

 Learning to implement secure authentication mechanisms using bcrypt and JWT.
Understanding the importance of session management and secure cookie practices.

#### Database Management:

 Gaining experience with Sequelize ORM for managing complex database operations and relationships.
Handling migrations and seeding data for testing and development purposes.

#### Error Handling and Debugging:

 Developing skills in debugging and handling various server-side and client-side errors.
Implementing user-friendly error messages and validations to enhance the user experience.

## Future Enhancements

#### Enhanced Game Scenarios:

 Adding more game scenarios and branching storylines to increase engagement.
Implementing features like saving multiple game states and replay options.

#### User Profiles and Progress Tracking:

 Allowing users to create profiles and track their progress and achievements within the game.

#### Improved Admin Tools:

 Developing more comprehensive admin tools for better game management and user analytics.

#### Mobile Optimization:

 Further optimizing the game for mobile devices to ensure a seamless experience on smaller screens.
Dark Whispers aims to provide an engaging and interactive experience for users while offering robust backend management and security features. The project showcases the implementation of modern web development practices and highlights the importance of structured architecture and secure coding standards.

## Live URL
https://darkwhispers.onrender.com/  

## Installation

1. Clone the repository: https://github.com/sentorus67/DarkWhispers.git
2. Install or open VS Code.
3. Install the dependencies: 'npm install' in the integrated terminal.
4. Set up the environmental variables by creating a new  '.env' file and add the following:

- DB_NAME=your_database_name
- DB_USER=your_database_user
- DB_PASSWORD=your_database_password
- DB_HOST=your_database_host
- SESSION_SECRET=your_session_secret
- JWT_SECRET=your_jwt_secret

5. Set up the database: 'npm run db:reset'.
6. Seed teh database: 'npm run seed'.
7. Start the server: 'npm start', open your browser and navigate to 'http://localhost:3001'.
8. Navigate through the game!


## Screenshots

![Login page](<assets/images/Screenshot 2024-06-11 at 8.00.48 PM.png>)

![Start a new game or continue one](<assets/images/Screenshot 2024-06-11 at 8.01.38 PM.png>)

![Start of a new game](<assets/images/Screenshot 2024-06-11 at 8.02.04 PM.png>)

## Technologies Used

This application is powered by Node.js (v.20.14.0), Express.js (v.4.19.2), JavaScript, MySQL, Sequelize (ORM), brcyptjs (v.5.2.1), bcryptjs (v.2.4.3), crypto (v.1.0.1) jsonwebtoken (v.9.0.2) and Handlebars (template engine). It utilizes the node package manager (npm) dependencies sequelize (v6.1.1), mysql2 (v3.3.0), express (v4.18.2), dotenv (v16.0.3), bcrypt (v.5.1.0) and JSON Web Tokens(JWT) for authentication, Bulma (CSS franework) (v0.9.4), express-handlebars (v7.1.2), and express-session (v1.18.0). Also, the application Insomnia was utilized to test the functionality of routes within the program.

## Credits

- [Malcolm's GitHub Profile](https://github.com/mmalcolmm)
- [Jemeric's GitHub Profile](https://github.com/sentorus67)
- [Courtney's GitHub Profile](https://github.com/cnm724) 

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Questions

If you have any additional questions you can use the links to reach us through our github accounts listed in the credits section. 
