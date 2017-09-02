import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aw-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  services = [
    {
      name: 'Design',
      summary: '',
      icon: 'design',
      link: '/services/design'
    },
    {
      name: 'Engineering',
      summary: '',
      icon: 'engineering',
      link: '/services/engineering'
    },
    {
      name: 'Technology',
      summary: '',
      icon: 'tech',
      link: '/services/technology'
    },
    {
      name: 'Support',
      summary: '',
      icon: 'support',
      link: '/services/support'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
