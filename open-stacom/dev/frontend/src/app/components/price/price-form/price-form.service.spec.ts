import { TestBed } from '@angular/core/testing';

import { PriceFormService } from './price-form.service';

describe('PriceFormService', () => {
  let service: PriceFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
