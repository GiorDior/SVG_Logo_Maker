const Shape = require("./Shape");

describe("Shape class", () => {
  test("Should create a shape object with the provided properties", () => {
    const shape = new Shape("Cir", "black", "Circle", "red");

    expect(shape.shapeName).toBe("Cir");
    expect(shape.textColor).toBe("black");
    expect(shape.shapeType).toBe("Circle");
    expect(shape.shapeColor).toBe("red");
  });

  test("Should set default values if not provided", () => {
    const shape = new Shape();

    expect(shape.shapeName).toBeUndefined();
    expect(shape.textColor).toBeUndefined();
    expect(shape.shapeType).toBeUndefined();
    expect(shape.shapeColor).toBeUndefined();
  });
});
