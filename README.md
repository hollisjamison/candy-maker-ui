# Candy Maker API

## Part One Instructions
In the initial commit of this project you have been provided with an API server. In a new branch called `part-one-answer`, your task is to create a React app in a client folder of this repo, and integrate the Express and React app following the standards we went over in class.

Specifically:
- Your API should remain in the root directory.
- Your React site should live in the `/client` folder and should have it's own `package.json`.
- Use scripts in your `package.json` to start, build, and test your React app by moving into the client folder.
- Use scripts in your `package.json` to run the backend and frontend at the same time.
- Change your backend to serve the `build` folder in your `client` folder.
- The React site should be a simple site as shown below with a title, and an input box that updates a string under the box. Use components as outlined last week.
- Verify your React site is viewable using both localhost:1337 (express backend) and localhost:3000 (create-react-app)

![image](./part1.gif)

## Part Two Instructions
Continuing from your `part-one-answer` branch, in a new branch called `part-two-answer`, your task is to create a React page that retrieves a list of Candy manufacturers from the API and displays them on the screen. This page should also have a search box that updates the list of manufacturers displayed to only those whose name matches the search term typed by the user.

![image](./part2.gif)

## Part Three Instructions
Continuing from your `part-two-answer` branch, in a new branch called `part-three-answer`, your task is to create a multi-page React application. Each manufacturer on the existing page should be a link to a page which displays all of the products made by that manufacturer. Put each component in it's own folder with an matching CSS file.

![image](./part3.gif)

## Part Four Instructions
Continuing from your `part-three-answer` branch, in a new branch called `part-four-answer`, your task is to create a test suite that contains unit tests for each of the components used in your application.
