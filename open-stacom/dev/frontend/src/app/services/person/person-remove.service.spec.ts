import { TestBed } from '@angular/core/testing';

import { PersonRemoveService } from './person-remove.service';

describe('PersonRemoveService', () => {
  let service: PersonRemoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonRemoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
