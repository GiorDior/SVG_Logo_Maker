class Triangle {
  constructor() {
    this.color = "blue";
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}
