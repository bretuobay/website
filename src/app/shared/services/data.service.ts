import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  get services() {
    return [
      {
        name: 'Design',
        summary: `Through data and user research, experimentation,
                  and testing, we ensure what we’re building engages
                  with your users the way they want.`,
        icon: 'design',
        link: '/services/design'
      },
      {
        name: 'Engineering',
        summary: `Using the best technologies for progressive web
                  apps our engineers expertly architect and implement
                  quality code that is cost effective for you, and is
                  further supported by our design.`,
        icon: 'engineering',
        link: '/services/engineering'
      },
      {
        name: 'Technology',
        summary: `We use technologies proven and supported by a large
                  open-source community and adopted by leading companies
                  like Apple, Netflix, Microsoft, and IBM.`,
        icon: 'tech',
        link: '/services/technology'
      },
      {
        name: 'Support',
        summary: `We provide insight, resources, and the knowledge your
                  team can learn and grow from to ensure comfort and
                  success moving forward.`,
        icon: 'support',
        link: '/services/support'
      }
    ];
  }

}
