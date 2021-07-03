# Would You Rather! Project



## Table of Contents

1. Description
2. Instructions
3. Running
4. Important Points


## Description

- The final Udacity front-end web development Advanced program project.
- build a web app that lets a user play the Would You Rather? game. The game goes like this: A user is asked a question in the form: Would you rather [option A] or [option B] ?.
- Users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.


# Instructions

- Use both: 
    1. This repo (https://github.com/udacity/reactnd-project-would-you-rather-starter) is your starter code for the project.
    2. Recommendation :(https://github.com/facebook/create-react-app) to generate your submission since it's the easiest way to ensure you have everything the project reviewer will need to install and run your app.
- `cd` into your new folder and run : 
  1. `npm install` to install all project dependencies.
  2. `npm install bootstrap`.
  2. `npm install react-router-dom`.
  3. `npm install sweetalert2 `
- modifying a lot CSS in `App.css` and add new styles.
- App Architecture:   ***every folder represent what it includes and same with files***
    1. actions folder:
        - `actionTypes.js`
        - `questionActions.js`
        - `userActions.js`
    3. reducers folder:
        - `questionsReducers.js`
        - `usersReducers.js`
    2. handlers folder:   *** Api handler Functions ***
        - `questionsApiData.js`
        - `usersApiData.js`
    4. store folder:
        - `index.js`
    5. components folder:
        - `SignIn.js`
        - `Questions.js`
        - `QuestionDetails.js`
        - `LeaderBoard.js`
        - `NewQue.js`
        - `NavBar.js`
        - `LogOut.js`
    6. data folder:
        - includes the `_DATA.js` and `README.md` files


# Running

- start the ***development server*** with `npm start` / `npm run start` to launch.
- open `http://localhost:3000/` in the browser.


# Important Points

 - development server:

1. To simplify the development process, a backend server has been provided. The provided file [`_DATA.js`](src/data/_DATA.js) a fake database and contains methods that let you access the data and another provided [`README.md`](src/data/README.md) file contains the explanation of how to use methods inside [`_DATA.js`] that you will need to perform necessary operations on the backend part.