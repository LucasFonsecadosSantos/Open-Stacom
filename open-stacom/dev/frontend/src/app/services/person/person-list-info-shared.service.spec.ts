import { TestBed } from '@angular/core/testing';

import { PersonListInfoSharedService } from './person-list-info-shared.service';

describe('PersonListInfoSharedService', () => {
  let service: PersonListInfoSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonListInfoSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
