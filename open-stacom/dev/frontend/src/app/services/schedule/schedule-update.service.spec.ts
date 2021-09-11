import { TestBed } from '@angular/core/testing';

import { ScheduleUpdateService } from './schedule-update.service';

describe('ScheduleUpdateService', () => {
  let service: ScheduleUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
