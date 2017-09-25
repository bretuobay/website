import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'aw-why-aviabird',
  templateUrl: './why-aviabird.component.html',
  styleUrls: ['./why-aviabird.component.scss']
})
export class WhyAviabirdComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  get services() { return this.data.services; }

}
