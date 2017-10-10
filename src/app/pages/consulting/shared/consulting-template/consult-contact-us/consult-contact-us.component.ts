import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aw-consult-contact-us',
  templateUrl: './consult-contact-us.component.html',
  styleUrls: ['./consult-contact-us.component.scss']
})
export class ConsultContactUsComponent implements OnInit {
  @Input() data;
  @Input() language;

  constructor() { }

  ngOnInit() {
  }

}
