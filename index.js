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

const Triangle = require("./lib/Triangle");
const Circle = require("./lib/Circle");
const Square = require("./lib/Square");
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
    name: "shapeName",

    //This does not work after one entry has been created

    validate: function (input) {
      if (input.length <= 3) {
        return true;
      }
      return "Please enter up to three characters.";
    },
  },

  {
    type: "input",
    message: "Please enter color keyword or hexidecimal:",
    name: "textColor",
  },
  {
    type: "list",
    message: "Please choose a shape:",
    name: "shapeType",
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
    let result = null;
    //console.log(response);

    switch (response.shapeType) {
      case "Triangle":
        result = new Triangle(
          response.shapeName,
          response.textColor,
          response.shapeType,
          response.shapeColor
        );
        break;

      case "Circle":
        result = new Circle(
          response.shapeName,
          response.textColor,
          response.shapeType,
          response.shapeColor
        );
        break;

      case "Square":
        result = new Square(
          response.shapeName,
          response.textColor,
          response.shapeType,
          response.shapeColor
        );
        break;

      default:
        return result;
    }
    console.log(result);
    console.log(result.render());
    const svg = result.render();
    fs.writeFile(`./examples/logo.svg`, svg, () => {
      console.log("Your file has been written.");
    });
  });
}

//generateSVG() -> logo.svg
//displaySVG() -> 300x200  pixel
init();
