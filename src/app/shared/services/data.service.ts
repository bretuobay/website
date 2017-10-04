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

  medium_feeds() {
    return this.http.get(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/aviabird'
    ).map(res => res.json().items as Array<Feed>);
  }

  get services() {
    return SERVICE_DATA;
  }

  get caseStudy() {
    return CASE_STUDY_DATA;
  }

}
