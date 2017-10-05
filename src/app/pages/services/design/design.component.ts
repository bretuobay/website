import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from 'app/shared/services/data.service';
import { serviceNames } from 'app/shared/data/services';

@Component({
  selector: 'aw-design',
  templateUrl: './design.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  get service() {
    return this.data
      .services
      .find(service => service.name === serviceNames.Design);
  }

}
