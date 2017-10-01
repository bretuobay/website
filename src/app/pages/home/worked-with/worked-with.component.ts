import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aw-worked-with',
  templateUrl: './worked-with.component.html',
  styleUrls: ['./worked-with.component.scss']
})
export class WorkedWithComponent implements OnInit {
  clientList = [
    {name: 'My Veeta', img: '/assets/clients/logo/my-veeta.png'},
    {name: 'Groovepacker', img: '/assets/clients/logo/groovepacker.png'},
    {name: 'Max My Wealth', img: '/assets/clients/logo/maxmywealth.png'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
