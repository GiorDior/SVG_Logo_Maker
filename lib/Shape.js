//Any common functionality and properties between the shapes will be placed here
//This is the parent class Shape
//use inhertancet to reuse code in the child classes (triangle, square, circle)

//Shape Class: Each shape shoudld be tested for a render() method that retruns a string

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// shapes all have the same color variations

// define the classes for each shape
// Parent class -> Shape
// Child class -> Triangle, Circle, Square
// method -> setColor(color)
// method -> render() -> shape to svg string

class Shape {
  constructor(shapeName, textColor, shapeType, shapeColor) {
    this.shapeName = shapeName;
    this.textColor = textColor;
    this.shapeType = shapeType;
    this.shapeColor = shapeColor;
    //this.stringName = "String";
  }

  // render() {
  //   return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  // }
}

module.exports = Shape;
