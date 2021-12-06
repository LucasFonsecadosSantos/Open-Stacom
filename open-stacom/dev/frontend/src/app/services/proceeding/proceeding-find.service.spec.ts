import { TestBed } from '@angular/core/testing';

import { ProceedingFindService } from './proceeding-find.service';

describe('ProceedingFindService', () => {
  let service: ProceedingFindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProceedingFindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
