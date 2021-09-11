import { TestBed } from '@angular/core/testing';

import { PreviousEditionCreateService } from './previous-edition-create.service';

describe('PreviousEditionCreateService', () => {
  let service: PreviousEditionCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviousEditionCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
