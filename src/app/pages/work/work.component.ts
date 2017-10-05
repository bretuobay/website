import { CLIENT_DATA } from './../../shared/data/clients';
import { Component, OnInit, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { CASE_STUDY_DATA } from 'app/shared/data/case-study';
import { fadeInAnimation } from 'app/shared/animations';

@Component({
  selector: 'aw-work',
  templateUrl: './work.component.html',
  animations: [fadeInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  client_data = CLIENT_DATA;
  case_study = CASE_STUDY_DATA;
  window = window;
  @HostBinding('@fadeInAnimation')
  public animatePage = true;

  constructor() { }

  ngOnInit() {
  }

}
