import { TestBed } from '@angular/core/testing';

import { PricePlanUpdateService } from './price-plan-update.service';

describe('PricePlanUpdateService', () => {
  let service: PricePlanUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PricePlanUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
