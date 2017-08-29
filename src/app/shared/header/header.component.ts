import { Component, OnInit } from '@angular/core';

const NavItems = [
  {url: '/services', name: 'SERVICES'},
  {url: '/work', name: 'WORK'},
  {url: '/why-aviabird', name: 'WHY AVIABIRD'},
  {url: '/blog', name: 'BLOG'},
  {url: '/contact/hire-us', name: 'CONTACT US'},
];

@Component({
  selector: 'aw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navItems = NavItems;

  constructor() { }

  ngOnInit() {
  }

}
