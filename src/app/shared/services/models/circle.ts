class Circle {
  x: number;
  y: number;
  radius: number;
  fillColor: string;
  context: any;

  draw() {
    const context = this.context;
    const {x, y, radius, fillColor} = this;

    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.fillStyle = fillColor;
    context.fill();
  }
}