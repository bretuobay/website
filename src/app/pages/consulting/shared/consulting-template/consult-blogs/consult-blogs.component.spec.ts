import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultBlogsComponent } from './consult-blogs.component';

describe('ConsultBlogsComponent', () => {
  let component: ConsultBlogsComponent;
  let fixture: ComponentFixture<ConsultBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
