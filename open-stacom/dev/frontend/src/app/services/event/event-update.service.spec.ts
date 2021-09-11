import { TestBed } from '@angular/core/testing';

import { EventUpdateService } from './event-update.service';

describe('EventUpdateService', () => {
  let service: EventUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
