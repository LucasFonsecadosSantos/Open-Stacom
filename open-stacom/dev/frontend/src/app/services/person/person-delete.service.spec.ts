import { TestBed } from '@angular/core/testing';

import { PersonDeleteService } from './person-delete.service';

describe('PersonDeleteService', () => {
  let service: PersonDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
