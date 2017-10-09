import { Component, OnInit } from '@angular/core';
import { ELIXIR_CONSULTING_DATA } from 'app/shared/data/elixir-consulting';

@Component({
  selector: 'aw-phoenix-consulting',
  templateUrl: './phoenix-consulting.component.html',
  styleUrls: ['./phoenix-consulting.component.scss']
})
export class PhoenixConsultingComponent implements OnInit {
  elixir_data = ELIXIR_CONSULTING_DATA;

  constructor() { }

  ngOnInit() {
  }

}
