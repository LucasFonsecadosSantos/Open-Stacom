import { TestBed } from '@angular/core/testing';

import { SharedWebpageService } from './shared-webpage.service';

describe('SharedEventService', () => {
  let service: SharedWebpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedWebpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
