import { DesignComponent } from './../design/design.component';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from 'app/shared/services/data.service';
import { serviceNames } from 'app/shared/data/services';

@Component({
  selector: 'aw-engineering',
  templateUrl: './engineering.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./engineering.component.scss']
})
export class EngineeringComponent {
  constructor(private data: DataService) {
  }

  get service() {
    return this.data
      .services
      .find(service => service.name === serviceNames.Engineering);
  }
}
