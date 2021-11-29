import { TestBed } from '@angular/core/testing';

import { CommitteDeleteService } from './committe-delete.service';

describe('CommitteDeleteService', () => {
  let service: CommitteDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommitteDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
