import { TestBed } from '@angular/core/testing';

import { PersonUpdateService } from './person-update.service';

describe('PersonUpdateService', () => {
  let service: PersonUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
