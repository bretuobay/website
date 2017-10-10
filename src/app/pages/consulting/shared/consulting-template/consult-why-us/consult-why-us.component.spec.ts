import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultWhyUsComponent } from './consult-why-us.component';

describe('ConsultWhyUsComponent', () => {
  let component: ConsultWhyUsComponent;
  let fixture: ComponentFixture<ConsultWhyUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultWhyUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultWhyUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
