import { DataService } from './../../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aw-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  selectedService;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.onSelectService(this.services[0]);
  }

  onSelectService(service) {
    this.selectedService = service;
  }

  get services() { return this.data.services; }

}
