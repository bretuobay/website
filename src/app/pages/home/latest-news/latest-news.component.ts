import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

interface Feed {
  author: string;
  description: string;
  pubDate: string;
  title: string;
  link: string;
}

@Component({
  selector: 'aw-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  rssFeeds$: Observable<Array<Feed>>;

  constructor(private http: Http) { }

  ngOnInit() {
    this.rssFeeds$ = this.http.get(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/aviabird'
    ).map(res => res.json().items as Array<Feed>);
  }

  blogImg(description = '') {
    return description.match(/(?:src=)(?:.*)\"/)[0].split('\"')[1];
  }

  parseHeading(description = '') {
    return description
      .match(/<p>(?:.*)<\/p>/g)[0]
      .split('<p>')[1]
      .split('</p>')[0]
      .substring(0, 100) + ' ...';
  }

  parseDate(date = '') {
    return new Date(date);
  }

}
