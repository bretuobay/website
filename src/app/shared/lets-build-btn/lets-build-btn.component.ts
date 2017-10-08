import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aw-lets-build-btn',
  template: `
    <button
      routerLink="/contact/hire-us"
      class="contact-btn btn btn-outline-dark btn-lg"
    >Let’s build together</button>`,
  styles: [`
    :host {
      display: block;
    }
    .contact-btn {
      border-radius: 0;
      border-width: 2px;
      margin-bottom: 1rem;
      transition: all 500ms;
      cursor: pointer;
    }
    .contact-btn:hover {
      box-shadow: 0 10px 20px #aaa;
      transform: translateY(-10%) scale(1.05);
    }`
  ]
})
export class LetsBuildBtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
