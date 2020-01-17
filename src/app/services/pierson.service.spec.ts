import { TestBed } from '@angular/core/testing';

import { PiersonService } from './pierson.service';

describe('PiersonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PiersonService = TestBed.get(PiersonService);
    expect(service).toBeTruthy();
  });
});
