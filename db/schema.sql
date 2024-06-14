-- Connect to the default database to drop the target database
\c postgres;

-- Drop and recreate the database
DROP DATABASE IF EXISTS darkwhispers_db;
CREATE DATABASE darkwhispers_db;

-- Connect to the newly created database
\c darkwhispers_db;

-- Drop any tables if they exist
DROP TABLE IF EXISTS game_states_items;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS game_states;
DROP TABLE IF EXISTS scenarios;
DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS adventurer;

-- Users: Stores user information with a unique username and a hashed password.
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(5) NOT NULL
);

-- Games: Stores game information, such as title, genre, and release date.
CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    release_date DATE NOT NULL
);

-- Scenarios: Stores different scenarios or stages of the game. Each scenario is linked to a game and has a title, description, and choices (stored as JSON).
CREATE TABLE scenarios (
    id SERIAL PRIMARY KEY,
    game_id INTEGER REFERENCES games(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    key_item INTEGER,
    choices JSONB NOT NULL 
);

-- GameStates: Stores the current state of the game for each user. It references the users and scenarios tables and stores the state of the game as JSON.
CREATE TABLE game_states (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    scenario_id INTEGER REFERENCES scenarios(id) ON DELETE CASCADE,
    state JSONB NOT NULL,
    last_updated TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Adventurer: Stores information about adventurers that can be acquired in the game.
CREATE TABLE adventurer (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    hasKeyItem1 BOOLEAN,
    hasKeyItem2 BOOLEAN,
    hasKeyItem3 BOOLEAN,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    game_id INTEGER REFERENCES games(id) ON DELETE CASCADE,
    scenario_id INTEGER REFERENCES scenarios(id) ON DELETE CASCADE
);
