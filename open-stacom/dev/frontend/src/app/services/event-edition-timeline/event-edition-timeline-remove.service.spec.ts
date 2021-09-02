import { TestBed } from '@angular/core/testing';

import { EventEditionTimelineRemoveService } from './event-edition-timeline-remove.service';

describe('EventEditionTimelineRemoveService', () => {
  let service: EventEditionTimelineRemoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventEditionTimelineRemoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
