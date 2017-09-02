import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aw-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements OnInit {
  @Input() caseStudy: {
    name: string,
    color: {bg: string, text: string},
    url: string;
    heading: string,
    img: string,
    link: string
  };

  constructor() { }

  ngOnInit() {
  }

}
