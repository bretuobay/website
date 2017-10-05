import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from 'app/shared/services/data.service';

@Component({
  selector: 'aw-services-home',
  templateUrl: './services-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./services-home.component.scss']
})
export class ServicesHomeComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  get services() { return this.data.services; }

}
