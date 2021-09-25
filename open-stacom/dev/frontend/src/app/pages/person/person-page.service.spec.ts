import { TestBed } from '@angular/core/testing';

import { PersonPageService } from './person-page.service';

describe('PersonPageService', () => {
  let service: PersonPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
