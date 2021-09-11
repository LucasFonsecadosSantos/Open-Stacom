import { TestBed } from '@angular/core/testing';

import { ActivityDeleteService } from './activity-delete.service';

describe('ActivityDeleteService', () => {
  let service: ActivityDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
