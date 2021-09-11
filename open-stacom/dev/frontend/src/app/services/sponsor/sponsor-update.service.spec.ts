import { TestBed } from '@angular/core/testing';

import { SponsorUpdateService } from './sponsor-update.service';

describe('SponsorUpdateService', () => {
  let service: SponsorUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SponsorUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
