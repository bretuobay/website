import { fadeInAnimation } from './../../shared/animations';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'aw-home',
  templateUrl: './home.component.html',
  animations: [fadeInAnimation],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @HostBinding('@fadeInAnimation')
  public animatePage = true;

  constructor() { }

  ngOnInit() {
  }

}
