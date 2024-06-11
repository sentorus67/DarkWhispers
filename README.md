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

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Description](#description)
- [Live-URL](#live-url)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Technologies-Used](#technologies-used)
- [Credits](#credits)
- [License](#license)


## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

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

## Technologies Used

This application is powered by Node.js (v.20.14.0), Express.js (v.4.19.2), JavaScript, MySQL, Sequelize (ORM), brcyptjs (v.5.2.1), bcryptjs (v.2.4.3), crypto (v.1.0.1) jsonwebtoken (v.9.0.2) and Handlebars (template engine). It utilizes the node package manager (npm) dependencies sequelize (v6.1.1), mysql2 (v3.3.0), express (v4.18.2), dotenv (v16.0.3), bcrypt (v.5.1.0) and JSON Web Tokens(JWT) for authentication, Bulma (CSS franework) (v0.9.4), express-handlebars (v7.1.2), and express-session (v1.18.0). Also, the application Insomnia was utilized to test the functionality of routes within the program.

## Credits

- [Malcolm's GitHub Profile](https://github.com/mmalcolmm)
- [Jemeric's GitHub Profile](https://github.com/sentorus67)
- [Courtney's GitHub Profile](https://github.com/cnm724) 

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.