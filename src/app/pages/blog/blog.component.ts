import { DataService, Feed } from './../../shared/services/data.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aw-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

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
      .substring(0, 350) + ' ...';
  }

  parseDate(date = '') {
    try {
      return new Date(date.split(' ')[0]);
    } catch (_) {
      return new Date();
    };
  }

}
