import { TestBed } from '@angular/core/testing';

import { EventCreateService } from './event-create.service';

describe('EventCreateService', () => {
  let service: EventCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
