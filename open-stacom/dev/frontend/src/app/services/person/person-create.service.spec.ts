import { TestBed } from '@angular/core/testing';

import { PersonCreateService } from './person-create.service';

describe('PersonCreateService', () => {
  let service: PersonCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
