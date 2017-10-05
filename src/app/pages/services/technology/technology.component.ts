import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from 'app/shared/services/data.service';
import { serviceNames } from 'app/shared/data/services';

@Component({
  selector: 'aw-technology',
  templateUrl: './technology.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  constructor(private data: DataService) {
  }

  get service() {
    return this.data
      .services
      .find(service => service.name === serviceNames.Technology);
  }

  ngOnInit() {
  }

}
