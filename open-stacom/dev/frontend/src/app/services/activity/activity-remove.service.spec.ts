import { TestBed } from '@angular/core/testing';

import { ActivityRemoveService } from './activity-remove.service';

describe('ActivityRemoveService', () => {
  let service: ActivityRemoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityRemoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
