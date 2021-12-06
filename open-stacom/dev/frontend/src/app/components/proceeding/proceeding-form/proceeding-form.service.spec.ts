import { TestBed } from '@angular/core/testing';

import { ProceedingFormService } from './proceeding-form.service';

describe('ProceedingFormService', () => {
  let service: ProceedingFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProceedingFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
