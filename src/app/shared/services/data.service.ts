import { BLOG_MENU_ITEMS } from './../data/blog-menu';
import { SERVICE_DATA } from './../data/services';
import { CASE_STUDY_DATA } from './../data/case-study';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

export interface Feed {
  author: string;
  description: string;
  pubDate: string;
  title: string;
  link: string;
}

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  medium_feeds(tag = null) {
    let url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/aviabird';

    if (tag) {
      url += `/tagged/${tag}`;
    }

    return this.http
      .get(url)
      .map(res => res.json().items as Array<Feed>)
      .publishReplay(1).refCount();
  }

  get services() { return SERVICE_DATA; }
  get caseStudy() { return CASE_STUDY_DATA; }
  get blog_menu_items() { return BLOG_MENU_ITEMS; }

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
