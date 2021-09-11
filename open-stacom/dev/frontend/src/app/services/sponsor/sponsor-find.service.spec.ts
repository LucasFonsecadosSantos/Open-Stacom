import { TestBed } from '@angular/core/testing';

import { SponsorFindService } from './sponsor-find.service';

describe('SponsorFindService', () => {
  let service: SponsorFindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SponsorFindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
