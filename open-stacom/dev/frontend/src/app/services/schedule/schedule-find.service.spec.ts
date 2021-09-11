import { TestBed } from '@angular/core/testing';

import { ScheduleFindService } from './schedule-find.service';

describe('ScheduleFindService', () => {
  let service: ScheduleFindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleFindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
