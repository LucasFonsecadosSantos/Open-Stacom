import { TestBed } from '@angular/core/testing';

import { PreviousEditionFindService } from './previous-edition-find.service';

describe('PreviousEditionFindService', () => {
  let service: PreviousEditionFindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviousEditionFindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
