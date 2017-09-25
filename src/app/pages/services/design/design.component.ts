import { Component, OnInit } from '@angular/core';
import { DataService, serviceNames } from 'app/shared/services/data.service';

@Component({
  selector: 'aw-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  get service() {
    return this.data
      .services
      .find(service => service.name === serviceNames.Design);
  }

}
