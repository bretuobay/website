import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aw-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements OnInit {
  @Input() caseStudy: Object;

  constructor() { }

  ngOnInit() {
  }

}
