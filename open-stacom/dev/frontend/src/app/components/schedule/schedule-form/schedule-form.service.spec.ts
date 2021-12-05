import { TestBed } from '@angular/core/testing';

import { ScheduleFormService } from './schedule-form.service';

describe('ScheduleFormService', () => {
  let service: ScheduleFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
