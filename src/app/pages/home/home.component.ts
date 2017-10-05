import { fadeInAnimation } from './../../shared/animations';
import { Component, OnInit, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'aw-home',
  templateUrl: './home.component.html',
  animations: [fadeInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @HostBinding('@fadeInAnimation')
  public animatePage = true;

  constructor() { }

  ngOnInit() {
  }

}
