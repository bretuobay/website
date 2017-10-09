import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingTemplateComponent } from './consulting-template.component';

describe('ConsultingTemplateComponent', () => {
  let component: ConsultingTemplateComponent;
  let fixture: ComponentFixture<ConsultingTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultingTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
