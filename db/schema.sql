-- Drop database if it exists and create a new one
DROP DATABASE IF EXISTS darkwhispers_db;
CREATE DATABASE darkwhispers_db;

\c darkwhispers_db;

-- Drop any tbales if they exist
DROP TABLE IF EXISTS game_states;
DROP TABLE IF EXISTS scenarios;
DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS users;


-- Users: Stores user information with a unique username and a hashed password.
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
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
    choices JSONB NOT NULL 
--     JSONB stands for "JSON Binary" and is a data type in PostgreSQL that stores JSON data in a binary format. This format allows for efficient querying and indexing of JSON data.
-- This column is used to store the possible choices a player can make at a particular scenario. For example, in a text-based adventure game, each scenario might have multiple choices that affect the game's progression. These choices can be stored as a JSON object to allow for complex structures and easy querying.
);

-- GameStates: Stores the current state of the game for each user. It references the users and scenarios tables and stores the state of the game as JSON.
CREATE TABLE game_states (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    current_scenario_id INTEGER REFERENCES scenarios(id) ON DELETE CASCADE,
    state JSONB NOT NULL,
    -- This column is used to store the current state of the game for a particular user. This could include various aspects of the game state such as inventory items, current health, progress, and any other dynamic data that changes as the player progresses through the game.
    last_updated TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
