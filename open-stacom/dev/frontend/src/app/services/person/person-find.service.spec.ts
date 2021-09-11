import { TestBed } from '@angular/core/testing';

import { PersonFindService } from './person-find.service';

describe('PersonFindService', () => {
  let service: PersonFindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonFindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
