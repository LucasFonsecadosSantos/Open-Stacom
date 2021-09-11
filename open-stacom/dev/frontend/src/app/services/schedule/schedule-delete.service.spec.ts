import { TestBed } from '@angular/core/testing';

import { ScheduleDeleteService } from './schedule-delete.service';

describe('ScheduleDeleteService', () => {
  let service: ScheduleDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
