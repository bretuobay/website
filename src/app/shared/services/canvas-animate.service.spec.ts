import { TestBed, inject } from '@angular/core/testing';

import { CanvasAnimateService } from './canvas-animate.service';

describe('CanvasAnimateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanvasAnimateService]
    });
  });

  it('should be created', inject([CanvasAnimateService], (service: CanvasAnimateService) => {
    expect(service).toBeTruthy();
  }));
});
