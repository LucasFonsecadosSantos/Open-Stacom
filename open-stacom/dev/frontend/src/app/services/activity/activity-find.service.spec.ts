import { TestBed } from '@angular/core/testing';

import { ActivityFindService } from './activity-find.service';

describe('ActivityFindService', () => {
  let service: ActivityFindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityFindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
