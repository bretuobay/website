import { Injectable } from '@angular/core';
import Circle from './models/circle';

@Injectable()
export class CanvasAnimateService {
  circleArray: Array<Circle> = [];

  constructor() { }

  addCircleAnimation(context, nCircles = 100) {
    for (let i = 0; i < nCircles; i++) {
      const {x, y, dx, dy, radius} = this.randomCircleConf();
      const fillColor = this.getRndColor();
      const circle = new Circle(context, x, y, dx, dy, radius, fillColor);
      this.circleArray.push(circle);
      this.animateCircle(context);
    }
  }

  private randomCircleConf() {
    const radius = Math.random() * 50;
    return {
      x: Math.random() * (innerWidth - radius * 2) + radius,
      y: Math.random() * (innerHeight - radius * 2) + radius,
      dx: (Math.random() - 0.5),
      dy: (Math.random() - 0.5),
      radius: radius
    };
  }

  private animateCircle(context: CanvasRenderingContext2D) {
    requestAnimationFrame( _ => this.animateCircle(context));
    context.clearRect(0, 0, innerWidth, innerHeight);

    this.circleArray.forEach(circle => {
      circle.update();
    });
  }

  getRndColor() {
    const r = Math.round(255 * Math.random()),
          g = Math.round(255 * Math.random()),
          b = Math.round(255 * Math.random());
    return `rgba(${r}, ${g}, ${b}, ${Math.random() * Math.random()})`;
  }

}
