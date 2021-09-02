import { TestBed } from '@angular/core/testing';

import { LivestreamCreateService } from './livestream-create.service';

describe('LivestreamCreateService', () => {
  let service: LivestreamCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivestreamCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
