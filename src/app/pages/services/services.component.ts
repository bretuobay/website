import { Component, OnInit, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { fadeInAnimation } from 'app/shared/animations';

@Component({
  selector: 'aw-services',
  templateUrl: './services.component.html',
  animations: [fadeInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @HostBinding('@fadeInAnimation')
  public animatePage = true;
  
  constructor() { }

  ngOnInit() {
  }

}
