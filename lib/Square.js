const Shape = require("./Shape");

class Square extends Shape {
  constructor(shapeName, textColor, shapeType, shapeColor) {
    super(shapeName, textColor, shapeType, shapeColor);
    //     this.shapeName = shapeName;
    //     this.textColor = textColor;
    //     this.shapeType = shapeType;
    //     this.shapeColor = shapeColor;
  }
  render() {
    //return `<rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="${this.shapeColor}" />`;
    return `<svg
    version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="${this.shapeColor}" />

    <text
      x="150"
      y="125"
      font-size="60"
      text-anchor="middle"
      fill="${this.textColor}"
    >
      ${this.shapeName}
    </text>
  </svg>`;
  }
}

module.exports = Square;
