import { TestBed } from '@angular/core/testing';

import { ActivityListService } from './activity-list.service';

describe('ActivityListService', () => {
  let service: ActivityListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
