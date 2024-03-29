# SVG Logo Maker

This Node.js command-line application allows users to generate a simple logo for their projects by selecting text, colors, and shapes. It's a useful tool for freelance web developers who want to create logos without relying on graphic designers.

## User Story

As a freelance web developer, I want to generate a simple logo for my projects so that I don't have to pay a graphic designer.

## Acceptance Criteria

- The application should accept user input via the command line.
- Users should be prompted to enter up to three characters for the text of the logo.
- Users should be prompted to choose a color for the text, either by color keyword or hexadecimal number.
- Users should be presented with a list of shapes to choose from: circle, triangle, and square.
- Users should be prompted to choose a color for the selected shape, either by color keyword or hexadecimal number.
- After entering input for all prompts, an SVG file named `logo.svg` should be created.
- The application should print "Generated logo.svg" in the command line once the SVG file is created.
- When users open the `logo.svg` file in a browser, they should see a 300x200 pixel image that matches the entered criteria.

## How to Use

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the project directory.
3. Run `npm install` to install the required dependencies.
4. Run `node index.js` to start the application.
5. Follow the prompts to enter text, text color, shape, and shape color.
6. Once all prompts are answered, the application will generate `logo.svg` in the project directory.

## Walkthrough Video

Please refer to [this video walkthrough](https://app.screencastify.com/v3/watch/oLi3QOEMg7dgLRmKffux) to see the functionality of the application and ensure it meets all the acceptance criteria.

## Technologies Used

- Node.js
- Inquirer.js (for command-line prompts)

## Author

Giordan Thompson

## License

This project is licensed under the [MIT License](LICENSE).
