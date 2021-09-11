import { TestBed } from '@angular/core/testing';

import { EventFindService } from './event-find.service';

describe('EventFindService', () => {
  let service: EventFindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventFindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
