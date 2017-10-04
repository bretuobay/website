import { CLIENT_DATA } from './../../shared/data/clients';
import { Component, OnInit } from '@angular/core';
import { CASE_STUDY_DATA } from 'app/shared/data/case-study';

@Component({
  selector: 'aw-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  client_data = CLIENT_DATA;
  case_study = CASE_STUDY_DATA;
  window = window;

  constructor() { }

  ngOnInit() {
  }

}
