// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

//call dependencies

//inquirer
const inquirer = require("inquirer");
const fs = require("fs");

//fs

//Questions
// prompt for text -> three character max
// prompt for text color -> color keyword or hexidecimal
// prompt for shape -> list of shapes: circle, triangle, square
// promt for shape color -> color keyword or hexidecimal

const questions = [
  {
    type: "input",
    message: "Please enter text (3 characters max):",
    name: "text",

    //This does not work after one entry has been created

    // validate: function (input) {
    //   if (input.lenght <= 3) {
    //     return true;
    //   } else {
    //     return "Please enter up to three characters.";
    //   }
    // },
  },

  {
    type: "input",
    message: "Please enter color keyword or hexidecimal:",
    name: "textColor",
  },
  {
    type: "list",
    message: "Please choose a shape:",
    name: "shapes",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    message: "Please enter a shape color keyword or hexidecimal:",
    name: "shapeColor",
  },
];

//Write functions for inputs
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
  });
}
//generateSVG() -> logo.svg
//displaySVG() -> 300x200  pixel
init();
