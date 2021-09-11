import { TestBed } from '@angular/core/testing';

import { CallsUpdateService } from './calls-update.service';

describe('CallsUpdateService', () => {
  let service: CallsUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallsUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
