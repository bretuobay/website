import { Injectable } from '@angular/core';
import Circle from './models/circle';

@Injectable()
export class CanvasAnimateService {
  circleArray: Array<Circle> = [];
  colorArray = [
    '44, 62, 80',
    '231, 76, 60',
    '241, 224, 152',
    '52, 152, 219',
    '41, 128, 185'
  ];

  constructor() { }

  addCircleAnimation(context, nCircles = 100) {
    for (let i = 0; i < nCircles; i++) {
      const {x, y, dx, dy, radius} = this.randomCircleConf();
      const fillColor = this.getRndColor();
      const circle = new Circle(context, x, y, dx, dy, radius, fillColor);
      this.circleArray.push(circle);
    }
    this.animateCircle(context);
  }

  private randomCircleConf() {
    const radius = Math.random() * 10;
    return {
      x: Math.random() * (innerWidth - radius * 2) + radius,
      y: Math.random() * (innerHeight - 15 - radius * 2) + radius,
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
    const color = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
    return `rgba(${color}, ${Math.random()})`;
  }

}
