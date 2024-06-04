module.exports = {
    development: {
      username: 'your_db_username',
      password: 'your_db_password',
      database: 'text_based_adventure_game_dev',
      host: '127.0.0.1',
      dialect: 'postgres'
    },
    test: {
      username: 'your_db_username',
      password: 'your_db_password',
      database: 'text_based_adventure_game_test',
      host: '127.0.0.1',
      dialect: 'postgres'
    },
    production: {
      username: 'your_db_username',
      password: 'your_db_password',
      database: 'text_based_adventure_game_prod',
      host: '127.0.0.1',
      dialect: 'postgres'
    }
  };
  