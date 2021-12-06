import { TestBed } from '@angular/core/testing';

import { ProceedingCreateService } from './proceeding-create.service';

describe('ProceedingCreateService', () => {
  let service: ProceedingCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProceedingCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
