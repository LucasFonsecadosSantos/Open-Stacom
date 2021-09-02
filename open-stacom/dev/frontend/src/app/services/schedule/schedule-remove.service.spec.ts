import { TestBed } from '@angular/core/testing';

import { ScheduleRemoveService } from './schedule-remove.service';

describe('ScheduleRemoveService', () => {
  let service: ScheduleRemoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleRemoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
