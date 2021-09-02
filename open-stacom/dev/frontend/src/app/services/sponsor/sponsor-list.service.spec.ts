import { TestBed } from '@angular/core/testing';

import { SponsorListService } from './sponsor-list.service';

describe('SponsorListService', () => {
  let service: SponsorListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SponsorListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
