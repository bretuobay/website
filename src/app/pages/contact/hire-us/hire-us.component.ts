import { Http } from '@angular/http';
import { Component, OnInit, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { fadeInAnimation } from 'app/shared/animations';

@Component({
  selector: 'aw-hire-us',
  templateUrl: './hire-us.component.html',
  animations: [fadeInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./hire-us.component.scss']
})
export class HireUsComponent implements OnInit {
  form: FormGroup;
  showAlert = false;
  @HostBinding('@fadeInAnimation')
  public animatePage = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: Http
  ) {
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
      budget: ['$10,000 - $50,000', Validators.required],
      message: [''],
    });
  }

  onSubmit() {
    if (this.form.invalid) { return this.showAlert = true; }

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

    const subs = this.http.post(
      `${this.firebaseURL}/messages.json`,
      formRequest
    ).subscribe(
      _ => _,
      e => console.error(e),
      () => subs.unsubscribe()
    );

    this.form.reset();
    this.router.navigate(['/contact/hire-us/thank-you']);
  }

  get firebaseURL() {
    return `https://${environment.firebase.projectId}.firebaseio.com`;
  }

}
