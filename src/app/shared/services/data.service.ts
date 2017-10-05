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
    const url = 'https://api.rss2json.com/v1/api.json?';

    return this.http
      .get(`${url}rss_url=https://medium.com/feed/aviabird`)
      .map(res => res.json().items as Array<Feed>)
      .publishReplay(1, 60 * 60 * 24)
      .refCount();
  }

  get services() {
    return SERVICE_DATA;
  }

  get caseStudy() {
    return CASE_STUDY_DATA;
  }

}
