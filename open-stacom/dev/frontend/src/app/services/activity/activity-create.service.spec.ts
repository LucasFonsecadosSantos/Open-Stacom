import { TestBed } from '@angular/core/testing';

import { ActivityCreateService } from './activity-create.service';

describe('ActivityCreateService', () => {
  let service: ActivityCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
