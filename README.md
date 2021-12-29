# Movies Saga

## Description

_Duration: Weekend Challenge_

This app is a movie list app. Users can view movies and once clicked on it will give you a movie description and the genres it is related to. You can also add a new movie, description and genre to the existing list.

The app uses a [PostgreSQL](https://www.postgresql.org/) database to store the movies and genres, [Express](https://expressjs.com/) / [Node.js](https://nodejs.org/en/) as a server, and [React](https://reactjs.org/), [Redux](https://redux.js.org/), and [Redux-Saga](https://redux-saga.js.org/) on the front end. 

## Screenshots

![pics/home.png](pics/home.png)
_Home screen._

![pics/details.png](pics/details.png)
_Selected movie details screen._

![pics/add.png](pics/edit.png)
_Add movie screen._

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)

## Installation

1. After cloning this repository, set up a PostgreSQL database called `saga_movies_weekend` on port 5432. You might want to use [Postico](https://eggerapps.at/postico/) as a GUI to help this setup process.
2. Use the commands in the `database.sql` file in the root directory of the project to set up a table in the database with some dummy data.
3. Run `npm install` to install dependencies in this project.
4. Run `npm server start` to start the server, which will run on port 5000.
5. Run `npm client start` to start the client, which will run on port 3000.
6. Running the client should open up a browser window to `localhost:3000` where you can view and use the app. You can also manually type in this address in your browser.

## Built With

1. [Node.js](https://nodejs.org/en/)
2. [Express](https://expressjs.com/)
3. [React](https://reactjs.org/)
4. [Redux](https://redux.js.org/)
5. [Redux-Saga](https://redux-saga.js.org/)
6. [PostgreSQL](https://www.postgresql.org/)
7. [Material-UI](https://mui.com/)
8. [axios](https://www.npmjs.com/package/axios)
9. HTML
10. CSS

