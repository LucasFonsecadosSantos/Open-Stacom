import { TestBed } from '@angular/core/testing';

import { SharedInformationService } from './shared-information.service';

describe('SharedInformationService', () => {
  let service: SharedInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
