-- Drop database if it exists and create a new one
DROP DATABASE IF EXISTS darkwhispers_db;
CREATE DATABASE darkwhispers_db;

\c darkwhispers_db;

-- Drop any tbales if they exist
DROP TABLE IF EXISTS game_states;
DROP TABLE IF EXISTS scenarios;
DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS users;

-- GameStates: Stores the current state of the game for each user. It references the users and scenarios tables and stores the state of the game as JSON.
-- Scenarios: Stores different scenarios or stages of the game. Each scenario is linked to a game and has a title, description, and choices (stored as JSON).
-- Games: Stores game information, such as title, genre, and release date.
-- Users: Stores user information with a unique username and a hashed password.



-- Create GameStates table
CREATE TABLE game_states (
    id SERIAL PRIMARY KEY,
    user_id
)