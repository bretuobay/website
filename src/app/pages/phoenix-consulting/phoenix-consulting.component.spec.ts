import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoenixConsultingComponent } from './phoenix-consulting.component';

describe('PhoenixConsultingComponent', () => {
  let component: PhoenixConsultingComponent;
  let fixture: ComponentFixture<PhoenixConsultingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoenixConsultingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoenixConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
