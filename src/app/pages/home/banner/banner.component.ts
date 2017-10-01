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
      img: '/assets/case-study/groovepacker/scan-pack.png',
      color: {bg: 'rgba(245, 60, 31, 0.7)', text: '#AA2525'},
      link: '/work/groovepacker'
    },
    {
      name: 'My Veeta | case study',
      heading: `Find your dream Job`,
      img: '/assets/case-study/my-veeta/landing.png',
      color: {bg: 'rgba(140, 255, 249, 0.7)', text: '#167884'},
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
