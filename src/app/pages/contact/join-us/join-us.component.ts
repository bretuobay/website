import { Component, OnInit, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'environments/environment';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { fadeInAnimation } from 'app/shared/animations';

@Component({
  selector: 'aw-join-us',
  templateUrl: './join-us.component.html',
  animations: [fadeInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./join-us.component.scss']
})
export class JoinUsComponent implements OnInit {
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
      location: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.invalid) { return this.showAlert = true; }

    const {
      name, email, location, message
    } = this.form.value;
    const subject = 'Hire me! Request for new hire';

    const date = Date();

    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Date: ${date}</div>
      <div>Location: ${location}</div>
      <div>Message: ${message}</div>
    `;

    const formRequest = {
      name, email, location, message, date, html
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
    this.router.navigate(['/contact/join-us/thank-you']);
  }

  get firebaseURL() {
    return `https://${environment.firebase.projectId}.firebaseio.com`;
  }

}
