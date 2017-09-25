import { Component, OnInit } from '@angular/core';
import { DataService, serviceNames } from 'app/shared/services/data.service';

@Component({
  selector: 'aw-training-and-support',
  templateUrl: './training-and-support.component.html',
  styleUrls: ['./training-and-support.component.scss']
})
export class TrainingAndSupportComponent implements OnInit {

  constructor(private data: DataService) { }

  get service() {
    return this.data
      .services
      .find(service => service.name === serviceNames.Support);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
