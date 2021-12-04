import { TestBed } from '@angular/core/testing';

import { PricePlanFindService } from './price-plan-find.service';

describe('PricePlanFindService', () => {
  let service: PricePlanFindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PricePlanFindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
