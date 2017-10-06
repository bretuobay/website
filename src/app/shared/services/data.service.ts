import { SERVICE_DATA } from './../data/services';
import { CASE_STUDY_DATA } from './../data/case-study';
import { Http, Headers } from '@angular/http';
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

  medium_feeds() {
    const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/aviabird';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('cache-control', 'max-age=86400');

    return this.http
      .get(url, { headers })
      .map(res => res.json().items as Array<Feed>)
      .publishReplay(1).refCount();
  }

  get services() {
    return SERVICE_DATA;
  }

  get caseStudy() {
    return CASE_STUDY_DATA;
  }

}
