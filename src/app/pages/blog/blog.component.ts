import { DataService, Feed } from './../../shared/services/data.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CanvasAnimateService } from 'app/shared/services/canvas-animate.service';

@Component({
  selector: 'aw-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, AfterViewInit {

  rssFeeds$: Observable<Array<Feed>>;

  constructor(
    private data: DataService,
    private elementRef: ElementRef,
    private canvasAnimate: CanvasAnimateService) { }

  ngOnInit() {
    this.rssFeeds$ = this.data.medium_feeds();
  }

  blogImg(description = '') {
    return description.match(/(?:src=)(?:.*)\"/)[0].split('\"')[1];
  }

  parseHeading(description = '') {
    return description
      .match(/<p>(?:.*)<\/p>/g)[0]
      .split('<p>')[1]
      .split('</p>')[0]
      .substring(0, 350) + ' ...';
  }

  parseDate(date = '') {
    try {
      return new Date(date.split(' ')[0]);
    } catch (_) {
      return new Date();
    };
  }

  ngAfterViewInit() {
    const canvas = this.elementRef.nativeElement.querySelector('canvas');
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    const main = this.elementRef.nativeElement.querySelector('.main');
    canvas.width = main.offsetWidth;
    canvas.height = main.offsetHeight - 15;
    this.canvasAnimate.addCircleAnimation(context, innerWidth / 20);
  }

}
