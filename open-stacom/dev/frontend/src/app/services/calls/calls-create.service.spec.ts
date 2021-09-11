import { TestBed } from '@angular/core/testing';

import { CallsCreateService } from './calls-create.service';

describe('CallsCreateService', () => {
  let service: CallsCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallsCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
