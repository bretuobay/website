import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAndSupportComponent } from './training-and-support.component';

describe('TrainingAndSupportComponent', () => {
  let component: TrainingAndSupportComponent;
  let fixture: ComponentFixture<TrainingAndSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingAndSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingAndSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
