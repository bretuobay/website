import { DataService } from './../../../shared/services/data.service';
import { CanvasAnimateService } from './../../../shared/services/canvas-animate.service';
import { Component, OnInit, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import CCaseStudy from 'app/shared/services/models/c-case-study';

@Component({
  selector: 'aw-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit, OnDestroy {
  caseStudy: Array<CCaseStudy>;

  constructor(
    private elementRef: ElementRef,
    private canvasAnimate: CanvasAnimateService,
    private data: DataService
  ) { }

  ngOnInit() {
    this.caseStudy = this.data.caseStudy;
  }

  ngAfterViewInit() {
    const canvas = this.elementRef.nativeElement.querySelector('canvas');
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    const jumbotron = this.elementRef.nativeElement.querySelector('.jumbotron');
    canvas.width = jumbotron.offsetWidth;
    canvas.height = jumbotron.offsetHeight;
    this.canvasAnimate.addCircleAnimation(context, 100);
  }

  ngOnDestroy() {
    this.canvasAnimate.stopAnimation = true;
  }
}
