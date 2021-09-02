import { TestBed } from '@angular/core/testing';

import { LivestreamListService } from './livestream-list.service';

describe('LivestreamListService', () => {
  let service: LivestreamListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivestreamListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
