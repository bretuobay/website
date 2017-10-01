import { DataService } from 'app/shared/services/data.service';
import { Feed } from './../../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'aw-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  rssFeeds$: Observable<Array<Feed>>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.rssFeeds$ = this.data.medium_feeds();
  }

  blogImg(description = '') {
    let width = window.innerWidth;

    if (width > 992) {
      width = 350;
    } else if (width > 552) {
      width = Math.floor(width * 0.7);
    }

    return description
      .match(/(?:src=)(?:.*)\"/)[0]
      .split('\"')[1]
      .replace('max/1024', `max/${width}`);
  }

  parseHeading(description = '') {
    return description
      .match(/<p>(?:.*)<\/p>/g)[0]
      .split('<p>')[1]
      .split('</p>')[0]
      .substring(0, 250) + ' ...';
  }

  parseDate(date = '') {
    try {
      return new Date(date.split(' ')[0]);
    } catch (_) {
      return new Date();
    };
  }

}
