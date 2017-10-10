import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aw-consult-proof',
  templateUrl: './consult-proof.component.html',
  styleUrls: ['./consult-proof.component.scss']
})
export class ConsultProofComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
