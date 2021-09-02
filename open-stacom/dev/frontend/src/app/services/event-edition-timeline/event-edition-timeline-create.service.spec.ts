import { TestBed } from '@angular/core/testing';

import { EventEditionTimelineCreateService } from './event-edition-timeline-create.service';

describe('EventEditionTimelineCreateService', () => {
  let service: EventEditionTimelineCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventEditionTimelineCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
