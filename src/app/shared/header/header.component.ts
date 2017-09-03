import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onDropDownShown() {
    document.getElementById('body').style.overflow = 'hidden';
  }

  onDropDownHide() {
    document.getElementById('body').style.overflow = 'auto';
  }

  get navItems() {
    return [
      {url: '/services', name: 'SERVICES'},
      {url: '/work', name: 'WORK'},
      {url: '/why-aviabird', name: 'WHY AVIABIRD'},
      {url: '/blog', name: 'BLOG'},
      {url: '/contact/hire-us', name: 'CONTACT US'},
    ];
  }

}
