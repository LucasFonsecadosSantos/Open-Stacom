import { TestBed } from '@angular/core/testing';

import { ScheduleCreateService } from './schedule-create.service';

describe('ScheduleCreateService', () => {
  let service: ScheduleCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
