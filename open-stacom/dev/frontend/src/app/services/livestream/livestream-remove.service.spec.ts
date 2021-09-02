import { TestBed } from '@angular/core/testing';

import { LivestreamRemoveService } from './livestream-remove.service';

describe('LivestreamRemoveService', () => {
  let service: LivestreamRemoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivestreamRemoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
