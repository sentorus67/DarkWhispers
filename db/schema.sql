-- Connect to the default database to drop the target database
\c postgres;

-- Drop and recreate the database
DROP DATABASE IF EXISTS darkwhispers_db;
CREATE DATABASE darkwhispers_db;

-- Connect to the newly created database
\c darkwhispers_db;

-- Drop any tables if they exist
DROP TABLE IF EXISTS game_states_items CASCADE;
DROP TABLE IF EXISTS items CASCADE;
DROP TABLE IF EXISTS game_states CASCADE;
DROP TABLE IF EXISTS scenario CASCADE;
DROP TABLE IF EXISTS game CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS adventurer CASCADE;

-- Users: Stores user information with a unique username and a hashed password.
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL
);

-- Games: Stores game information, such as title, genre, and release date.
CREATE TABLE game (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    release_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Scenarios: Stores different scenarios or stages of the game. Each scenario is linked to a game and has a title, description, and choices (stored as JSON).
CREATE TABLE scenario (
    id SERIAL PRIMARY KEY,
    game_id INTEGER REFERENCES game(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    -- key_item INTEGER, -- Allowing null values for key_item
    choices JSONB NOT NULL 
);

-- GameStates: Stores the current state of the game for each user. It references the users and scenarios tables and stores the state of the game as JSON.
CREATE TABLE game_state (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    current_scenario_id INTEGER REFERENCES scenario(id) ON DELETE CASCADE,
    state JSONB NOT NULL,
    last_updated TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Items: Stores information about items that can be acquired in the game.
CREATE TABLE item (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

-- GameStates_Items: Junction table to manage the many-to-many relationship between game_states and items.
CREATE TABLE game_state_item (
    game_state_id INTEGER REFERENCES game_state(id) ON DELETE CASCADE,
    item_id INTEGER REFERENCES item(id) ON DELETE CASCADE,
    PRIMARY KEY (game_state_id, item_id)
);

-- Adventurer: Stores adventurer information linked to users and games.
CREATE TABLE adventurer (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    game_id INTEGER NOT NULL REFERENCES game(id),
    scenario_id INTEGER NOT NULL REFERENCES scenario(id),
    name VARCHAR(255) NOT NULL,
    has_key_item1 BOOLEAN,
    has_key_item2 BOOLEAN,
    has_key_item3 BOOLEAN
);
