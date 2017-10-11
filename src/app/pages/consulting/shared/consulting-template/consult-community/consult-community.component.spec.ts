import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultCommunityComponent } from './consult-community.component';

describe('ConsultCommunityComponent', () => {
  let component: ConsultCommunityComponent;
  let fixture: ComponentFixture<ConsultCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
