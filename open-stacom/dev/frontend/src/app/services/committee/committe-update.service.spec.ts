import { TestBed } from '@angular/core/testing';

import { CommitteUpdateService } from './committe-update.service';

describe('CommitteUpdateService', () => {
  let service: CommitteUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommitteUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
