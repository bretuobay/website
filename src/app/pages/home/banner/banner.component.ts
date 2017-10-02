import { CanvasAnimateService } from './../../../shared/services/canvas-animate.service';
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'aw-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit {
  caseStudy = [
    {
      name: 'Groove Packer | case study',
      heading: 'The best warehouse management system',
      img: 'https://res.cloudinary.com/mally-in/image/upload/c_scale,w_520/v1506914160/scan-pack_wzay4f.png',
      color: {bg: 'linear-gradient(to bottom right, #ffc09b, #ed3722)', text: '#AA2525'},
      link: '/work/groovepacker'
    },
    {
      name: 'My Veeta | case study',
      heading: `Find your dream Job`,
      img: 'https://res.cloudinary.com/mally-in/image/upload/c_scale,w_520/v1506914166/landing_hvywzy.jpg',
      color: {bg: 'linear-gradient(to right bottom, rgb(171, 243, 240), rgb(4, 113, 113))', text: '#167884'},
      link: '/work/my-veeta'
    }
  ];

  constructor(
    private elementRef: ElementRef,
    private canvasAnimate: CanvasAnimateService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const canvas = this.elementRef.nativeElement.querySelector('canvas');
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    const jumbotron = this.elementRef.nativeElement.querySelector('.jumbotron');
    canvas.width = jumbotron.offsetWidth;
    canvas.height = jumbotron.offsetHeight;
    this.canvasAnimate.addCircleAnimation(context, innerWidth / 10);
  }
}
