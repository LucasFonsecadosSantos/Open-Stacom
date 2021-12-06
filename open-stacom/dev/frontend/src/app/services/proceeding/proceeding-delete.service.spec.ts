import { TestBed } from '@angular/core/testing';

import { ProceedingDeleteService } from './proceeding-delete.service';

describe('ProceedingDeleteService', () => {
  let service: ProceedingDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProceedingDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
