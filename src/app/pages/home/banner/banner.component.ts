import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aw-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  caseStudy = [
    {
      name: 'Groove Packer | case study',
      heading: 'The best warehouse management system',
      img: '/assets/case-study/groovepacker/scan-pack.png',
      color: {bg: '#73AE0C', text: '#355202'}
    },
    {
      name: 'Get Blueshift | case study',
      heading: 'The best Customer Engagement service',
      img: '/assets/case-study/blueshift/laptop.png',
      color: {bg: '#93E9F3', text: '#167884'}
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
