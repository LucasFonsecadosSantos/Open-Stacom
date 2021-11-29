import { TestBed } from '@angular/core/testing';

import { CommitteCreateService } from './committe-create.service';

describe('CommitteCreateService', () => {
  let service: CommitteCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommitteCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
