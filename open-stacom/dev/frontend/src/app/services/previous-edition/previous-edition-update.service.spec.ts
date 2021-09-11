import { TestBed } from '@angular/core/testing';

import { PreviousEditionUpdateService } from './previous-edition-update.service';

describe('PreviousEditionUpdateService', () => {
  let service: PreviousEditionUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviousEditionUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
