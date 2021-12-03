import { TestBed } from '@angular/core/testing';

import { SharedActivityService } from './shared-activity.service';

describe('SharedActivityService', () => {
  let service: SharedActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
