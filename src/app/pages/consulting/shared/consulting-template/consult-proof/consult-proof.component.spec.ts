import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultProofComponent } from './consult-proof.component';

describe('ConsultProofComponent', () => {
  let component: ConsultProofComponent;
  let fixture: ComponentFixture<ConsultProofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultProofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
