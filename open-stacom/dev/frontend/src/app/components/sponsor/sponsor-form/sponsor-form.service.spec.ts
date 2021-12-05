import { TestBed } from '@angular/core/testing';

import { SponsorFormService } from './sponsor-form.service';

describe('SponsorFormService', () => {
  let service: SponsorFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SponsorFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
