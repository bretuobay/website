import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyAviabirdComponent } from './why-aviabird.component';

describe('WhyAviabirdComponent', () => {
  let component: WhyAviabirdComponent;
  let fixture: ComponentFixture<WhyAviabirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyAviabirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyAviabirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
