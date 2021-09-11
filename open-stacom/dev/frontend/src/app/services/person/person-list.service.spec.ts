import { TestBed } from '@angular/core/testing';

import { PersonListService } from './person-list.service';

describe('PersonListService', () => {
  let service: PersonListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
