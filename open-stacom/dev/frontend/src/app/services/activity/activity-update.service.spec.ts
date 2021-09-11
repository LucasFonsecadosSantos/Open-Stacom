import { TestBed } from '@angular/core/testing';

import { ActivityUpdateService } from './activity-update.service';

describe('ActivityUpdateService', () => {
  let service: ActivityUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
