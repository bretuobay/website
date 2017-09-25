import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'aw-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private data: DataService, private sanitized: DomSanitizer) { }

  ngOnInit() {
  }

  get services() { return this.data.services; }

  transformImageURL(service) {
    const url = `/assets/services/${service.icon}.svg`;
    return this.sanitized.bypassSecurityTrustResourceUrl(url);
  }
}
