import { TestBed } from '@angular/core/testing';

import { EventEditionTimelineListService } from './event-edition-timeline-list.service';

describe('EventEditionTimelineListService', () => {
  let service: EventEditionTimelineListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventEditionTimelineListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
