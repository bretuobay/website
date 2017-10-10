import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultHeadComponent } from './consult-head.component';

describe('ConsultHeadComponent', () => {
  let component: ConsultHeadComponent;
  let fixture: ComponentFixture<ConsultHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
