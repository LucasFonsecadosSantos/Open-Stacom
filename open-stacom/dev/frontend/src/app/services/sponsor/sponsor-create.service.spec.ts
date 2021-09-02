import { TestBed } from '@angular/core/testing';

import { SponsorCreateService } from './sponsor-create.service';

describe('SponsorCreateService', () => {
  let service: SponsorCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SponsorCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
