import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireUsFormComponent } from './hire-us-form.component';

describe('HireUsFormComponent', () => {
  let component: HireUsFormComponent;
  let fixture: ComponentFixture<HireUsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireUsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireUsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
