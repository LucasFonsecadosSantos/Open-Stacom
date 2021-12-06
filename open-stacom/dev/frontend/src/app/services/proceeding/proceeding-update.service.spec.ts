import { TestBed } from '@angular/core/testing';

import { ProceedingUpdateService } from './proceeding-update.service';

describe('ProceedingUpdateService', () => {
  let service: ProceedingUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProceedingUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
