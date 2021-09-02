import { TestBed } from '@angular/core/testing';

import { ScheduleListService } from './schedule-list.service';

describe('ScheduleListService', () => {
  let service: ScheduleListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
