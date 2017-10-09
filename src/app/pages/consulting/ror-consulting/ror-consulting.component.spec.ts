import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RorConsultingComponent } from './ror-consulting.component';

describe('RorConsultingComponent', () => {
  let component: RorConsultingComponent;
  let fixture: ComponentFixture<RorConsultingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RorConsultingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RorConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
