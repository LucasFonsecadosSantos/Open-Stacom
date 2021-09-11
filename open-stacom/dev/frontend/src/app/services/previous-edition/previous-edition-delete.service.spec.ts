import { TestBed } from '@angular/core/testing';

import { PreviousEditionDeleteService } from './previous-edition-delete.service';

describe('PreviousEditionDeleteService', () => {
  let service: PreviousEditionDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviousEditionDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
