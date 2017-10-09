import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'aw-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
        link: '/consulting/angular'
      },
      {
        name: 'Elixir/Phoenix',
        link: '/consulting/phoenix'
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
        link: '/contact/join-us'
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

  trackByFn(index, item) {
    return index; // or item.id
  }

}
