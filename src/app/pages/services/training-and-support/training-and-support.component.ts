import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from 'app/shared/services/data.service';
import { serviceNames } from 'app/shared/data/services';

@Component({
  selector: 'aw-training-and-support',
  templateUrl: './training-and-support.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
