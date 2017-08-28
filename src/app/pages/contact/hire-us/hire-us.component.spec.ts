import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireUsComponent } from './hire-us.component';

describe('HireUsComponent', () => {
  let component: HireUsComponent;
  let fixture: ComponentFixture<HireUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
