import { Component, OnInit, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { fadeInAnimation } from 'app/shared/animations';

@Component({
  selector: 'aw-thank-you',
  templateUrl: './thank-you.component.html',
  animations: [fadeInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  @HostBinding('@fadeInAnimation')
  public animatePage = true;

  constructor() { }

  ngOnInit() {
  }

}
