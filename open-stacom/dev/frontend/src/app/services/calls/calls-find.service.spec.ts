import { TestBed } from '@angular/core/testing';

import { CallsFindService } from './calls-find.service';

describe('CallsFindService', () => {
  let service: CallsFindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallsFindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
