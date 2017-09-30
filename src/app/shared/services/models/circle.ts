export default class Circle {
  constructor(
    private context: CanvasRenderingContext2D,
    private x: number,
    private y: number,
    private dx: number,
    private dy: number,
    private radius: number,
    private fillColor: string
  ) {
  }

  draw() {
    const {context, x, y, radius, fillColor} = this;

    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.fillStyle = fillColor;
    context.fill();
  }

  update() {
    const {context, x, y, radius, fillColor} = this;

    if (x + radius > innerWidth  || x - radius < 0) {
      this.dx *= -1;
    }
    if (y + radius > innerHeight / 4  || y - radius < 0) {
      this.dy *= -1;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }

}
