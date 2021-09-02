import { TestBed } from '@angular/core/testing';

import { SponsorRemoveService } from './sponsor-remove.service';

describe('SponsorRemoveService', () => {
  let service: SponsorRemoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SponsorRemoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
