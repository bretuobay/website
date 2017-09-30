import { Injectable } from '@angular/core';

@Injectable()
export class CanvasAnimateService {
  canvasCircle = {
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight / 4,
    dx: (Math.random() - 0.5) * 8,
    dy: (Math.random() - 0.5) * 8,
    radius: 10
  };

  constructor() { }

  addCircleAnimation(context) {
    this.animate(context);
  }

  private animate(context) {
    const {x, y, dx, dy, radius} = this.canvasCircle;
    requestAnimationFrame( _ => this.animate(context));
    context.clearRect(0, 0, innerWidth, innerHeight);

    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.fillStyle = this.getRndColor();
    console.log(this.getRndColor());
    context.fill();
    if (x + radius > innerWidth  || x - radius < 0) {
      this.canvasCircle.dx *= -1;
    }
    if (y + radius > innerHeight / 4  || y - radius < 0) {
      this.canvasCircle.dy *= -1;
    }
    this.canvasCircle.x += this.canvasCircle.dx;
    this.canvasCircle.y += this.canvasCircle.dy;
  }

  getRndColor() {
    const r = Math.round(255 * Math.random()),
          g = Math.round(255 * Math.random()),
          b = Math.round(255 * Math.random());
    return `rgba(${r}, ${g}, ${b}, ${Math.random()})`;
  }

}
