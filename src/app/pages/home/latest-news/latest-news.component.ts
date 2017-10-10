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
    return this.data.blogImg(description);
  }

  parseHeading(description = '') {
    return this.data.parseHeading(description, 150);
  }

  parseDate(date = '') {
    return this.data.parseDate(date);
  }

}
