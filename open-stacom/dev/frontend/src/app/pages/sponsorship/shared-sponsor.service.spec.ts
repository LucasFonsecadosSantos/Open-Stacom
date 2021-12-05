import { TestBed } from '@angular/core/testing';

import { SharedSponsorService } from './shared-sponsor.service';

describe('SharedSponsorService', () => {
  let service: SharedSponsorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedSponsorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
