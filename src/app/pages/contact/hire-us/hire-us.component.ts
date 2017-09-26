import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'aw-hire-us',
  templateUrl: './hire-us.component.html',
  styleUrls: ['./hire-us.component.scss']
})
export class HireUsComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private database: AngularFireDatabase) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      company: [''],
      phone: [''],
      how: [''],
      budget: ['', Validators.required],
      message: [''],
    });
  }

  onSubmit() {
    const {
      name, email, company, phone, how, budget, message
    } = this.form.value;

    const date = Date();

    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Date: ${date}</div>
      <div>Company: ${company}</div>
      <div>Phone: ${phone}</div>
      <div>Found us via: ${how}</div>
      <div>Budget: ${budget}</div>
      <div>Message: ${message}</div>
    `;

    const formRequest = {
      name, email, company, phone, how, budget, message, date, html
    };

    this.database.list('/messages').push(formRequest);
    this.form.reset();
  }

}
