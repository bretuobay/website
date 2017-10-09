import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularConsultingComponent } from './angular-consulting.component';

describe('AngularConsultingComponent', () => {
  let component: AngularConsultingComponent;
  let fixture: ComponentFixture<AngularConsultingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularConsultingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
