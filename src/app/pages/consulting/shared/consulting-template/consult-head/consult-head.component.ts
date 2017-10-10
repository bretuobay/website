import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aw-consult-head',
  templateUrl: './consult-head.component.html',
  styleUrls: ['./consult-head.component.scss']
})
export class ConsultHeadComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
