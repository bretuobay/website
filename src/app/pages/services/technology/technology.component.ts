import { Component, OnInit } from '@angular/core';
import { DataService, serviceNames } from 'app/shared/services/data.service';

@Component({
  selector: 'aw-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  constructor(private data: DataService) {
    window.scrollTo(0, 0);
  }

  get service() {
    return this.data
      .services
      .find(service => service.name === serviceNames.Technology);
  }

  ngOnInit() {
  }

}
