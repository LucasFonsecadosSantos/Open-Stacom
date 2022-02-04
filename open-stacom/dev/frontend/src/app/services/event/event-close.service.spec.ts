import { TestBed } from '@angular/core/testing';

import { EventCloseService } from './event-close.service';

describe('EventCloseService', () => {
  let service: EventCloseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventCloseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
