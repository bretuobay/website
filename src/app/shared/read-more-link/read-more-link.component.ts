import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aw-read-more-link',
  template: `
    <a [hidden]="!isExternalLink" href="{{link}}" target="_blank" class="read-more">
      Read More
      <i class="visit-link-arrow fa fa-chevron-right" aria-hidden="true"></i>
    </a>
    <a [hidden]="isExternalLink" routerLink="{{route}}" class="read-more">
      Read More 
      <i class="visit-link-arrow fa fa-chevron-right" aria-hidden="true"></i>
    </a>
  `,
  styleUrls: ['./read-more-link.component.scss']
})
export class ReadMoreLinkComponent implements OnInit {
  @Input() route: string;
  @Input() link: string;
  @Input() isExternalLink: boolean;

  constructor() { }

  ngOnInit() {
  }

}
