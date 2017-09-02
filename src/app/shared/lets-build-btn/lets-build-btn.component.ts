import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aw-lets-build-btn',
  template: `
    <button
      routerLink="/contact/hire-us"
      class="contact-btn btn btn-outline-dark btn-lg"
    >Let’s build together</button>`,
  styles: [`
    .contact-btn {
      border-radius: 0;
      border-width: 2px;
      margin-bottom: 1rem;
    }`
  ]
})
export class LetsBuildBtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}