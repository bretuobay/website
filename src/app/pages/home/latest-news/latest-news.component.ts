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
    return description.match(/(?:src=)(?:.*)\"/)[0].split('\"')[1];
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
