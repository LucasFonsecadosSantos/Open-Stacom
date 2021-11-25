import { TestBed } from '@angular/core/testing';

import { SharedPersonService } from './shared-person.service';

describe('SharedPersonService', () => {
  let service: SharedPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
