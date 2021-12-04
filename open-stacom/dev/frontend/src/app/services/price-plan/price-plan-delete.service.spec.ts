import { TestBed } from '@angular/core/testing';

import { PricePlanDeleteService } from './price-plan-delete.service';

describe('PricePlanDeleteService', () => {
  let service: PricePlanDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PricePlanDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
