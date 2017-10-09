import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aw-consulting-template',
  templateUrl: './consulting-template.component.html',
  styleUrls: ['./consulting-template.component.scss']
})
export class ConsultingTemplateComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
