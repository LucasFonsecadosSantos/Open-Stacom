import { TestBed } from '@angular/core/testing';

import { SharedEventService } from './shared-event.service';

describe('SharedEventService', () => {
  let service: SharedEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
