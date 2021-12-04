import { TestBed } from '@angular/core/testing';

import { PricePlanCreateService } from './price-plan-create.service';

describe('PricePlanCreateService', () => {
  let service: PricePlanCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PricePlanCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
