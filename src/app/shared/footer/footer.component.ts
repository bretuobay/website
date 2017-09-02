import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aw-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get services() {
    return [
      {
        name: 'Design',
        link: '/services/design'
      },
      {
        name: 'Engineering',
        link: '/services/engineering'
      },
      {
        name: 'Technology',
        link: '/services/technology'
      },
      {
        name: 'Support',
        link: '/services/support'
      }
    ];
  }

  get capabilities() {
    return [
      {
        name: 'Angular',
        link: '/angular-consulting'
      },
      {
        name: 'Ruby on Rails',
        link: '/ror-consulting'
      },
      {
        name: 'Elixir/Phoenix',
        link: '/angular-consulting'
      }
    ];
  }

  get company() {
    return [
      {
        name: 'Press',
        link: '/press'
      },
      {
        name: 'Join Us',
        link: '/join-us'
      }
    ];
  }

  get connects() {
    return [
      {
        name: 'Github',
        link: 'https://github.com/aviabird'
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com/avia_bird'
      },
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/company-beta/13221667'
      },
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/aviabird'
      }
    ];
  }

}
