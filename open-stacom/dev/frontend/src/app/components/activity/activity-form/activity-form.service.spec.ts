import { TestBed } from '@angular/core/testing';

import { ActivityFormService } from './activity-form.service';

describe('ActivityFormService', () => {
  let service: ActivityFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
