import { TestBed } from '@angular/core/testing';

import { CallsDeleteService } from './calls-delete.service';

describe('CallsDeleteService', () => {
  let service: CallsDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallsDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
