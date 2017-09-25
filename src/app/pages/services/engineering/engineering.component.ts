import { DesignComponent } from './../design/design.component';
import { Component } from '@angular/core';
import { DataService, serviceNames } from 'app/shared/services/data.service';

@Component({
  selector: 'aw-engineering',
  templateUrl: './engineering.component.html',
  styleUrls: ['./engineering.component.scss']
})
export class EngineeringComponent {
  constructor(private data: DataService) {
    window.scrollTo(0, 0);
  }

  get service() {
    return this.data
      .services
      .find(service => service.name === serviceNames.Engineering);
  }
}
