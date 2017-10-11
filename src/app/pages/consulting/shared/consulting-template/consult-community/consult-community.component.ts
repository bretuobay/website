import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aw-consult-community',
  templateUrl: './consult-community.component.html',
  styleUrls: ['./consult-community.component.scss']
})
export class ConsultCommunityComponent implements OnInit {
  @Input() data;
  @Input() language;

  constructor() { }

  ngOnInit() {
  }

}
