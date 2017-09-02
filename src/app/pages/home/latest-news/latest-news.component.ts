import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aw-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get latestNews() {
    return [
      {
        title: 'Blog',
        heading: '10 Amazing open source angular > 2.x apps',
        url: 'https://medium.com/aviabird/10-amazing-open-source-angular-2-x-apps-825fb169dce3',
        img: 'https://cdn-images-1.medium.com/max/1000/1*vL3bRLnL1sGaZkyxazimGg.png'
      },
      {
        title: 'Blog',
        heading: 'Introducing AngularSpree',
        url: 'https://medium.com/aviabird/introducing-angularspree-ad55bea64d6c',
        img: 'https://cdn-images-1.medium.com/max/1000/1*GD_LeZJ_8ArjkZpVhe1vGA.png'
      },
      {
        title: 'Blog',
        heading: 'NgIf Else lands in Angular 2.x+/4.0',
        url: 'https://medium.com/aviabird/ngif-else-lands-in-angular-2-0-a242940e54ff',
        img: 'https://cdn-images-1.medium.com/max/800/1*ucjVNZkSFj_l5k4n59S28Q.jpeg'
      }
    ];
  }

}
