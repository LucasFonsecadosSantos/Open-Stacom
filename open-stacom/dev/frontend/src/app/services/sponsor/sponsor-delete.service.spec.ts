import { TestBed } from '@angular/core/testing';

import { SponsorDeleteService } from './sponsor-delete.service';

describe('SponsorDeleteService', () => {
  let service: SponsorDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SponsorDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
