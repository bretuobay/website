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
      color: {bg: '#FF9E6A', text: '#AA2525'},
      link: '/work/groovepacker'
    },
    {
      name: 'Get Blueshift | case study',
      heading: 'The best Customer Engagement service',
      img: '/assets/case-study/blueshift/laptop.png',
      color: {bg: '#93E9F3', text: '#167884'},
      link: '/work/blueshift'
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
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight / 4;
    this.canvasAnimate.addCircleAnimation(context);
  }
}
