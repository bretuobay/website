import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultContactUsComponent } from './consult-contact-us.component';

describe('ConsultContactUsComponent', () => {
  let component: ConsultContactUsComponent;
  let fixture: ComponentFixture<ConsultContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
