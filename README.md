# SilverHorseExercise

A Simple CRUD aplpication to consume data on posts, users and albums. [Silverhorse](https://bitbucket.org/silverhorsetechteam/recruitment-tests/src/c6f8acbd59345cb154d1e2c16247dbebd28f2600/front-end.md).

## About

The home page lists all active users obtained by getAllUsers(). From here you can select a user to view information on them. This redirects you to the /users/:id route where you can see the user's info, update their email address, view the user's post and album history, as well as create new posts and albums for the user, and finally delete the user.

## Installation

```
$ git clone https://github.com/nicoitorres/silver-horse-exercise
$ cd silver-horse-exercise
```

### Install dependencies

```
$ npm install
```

## Run

Run `npm run dev` development server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).
