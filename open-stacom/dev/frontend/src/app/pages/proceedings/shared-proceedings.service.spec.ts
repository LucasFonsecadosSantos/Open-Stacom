import { TestBed } from '@angular/core/testing';

import { SharedProceedingsService } from './shared-proceedings.service';

describe('SharedProceedingsService', () => {
  let service: SharedProceedingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedProceedingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
