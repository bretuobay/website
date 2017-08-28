import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkedWithComponent } from './worked-with.component';

describe('WorkedWithComponent', () => {
  let component: WorkedWithComponent;
  let fixture: ComponentFixture<WorkedWithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkedWithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkedWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
