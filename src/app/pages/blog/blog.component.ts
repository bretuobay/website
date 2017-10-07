import { DataService, Feed } from './../../shared/services/data.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, AfterViewInit, ElementRef, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { CanvasAnimateService } from 'app/shared/services/canvas-animate.service';
import { fadeInAnimation } from 'app/shared/animations';

@Component({
  selector: 'aw-blog',
  templateUrl: './blog.component.html',
  animations: [fadeInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, AfterViewInit {
  @HostBinding('@fadeInAnimation')
  public animatePage = true;

  rssFeeds$: Observable<Array<Feed>>;

  constructor(
    private data: DataService,
    private elementRef: ElementRef,
    private canvasAnimate: CanvasAnimateService) { }

  ngOnInit() {
    this.rssFeeds$ = this.data.medium_feeds();
  }

  get menuItems() { return this.data.blog_menu_items; }

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
