import { TestBed } from '@angular/core/testing';

import { CommitteFindService } from './committe-find.service';

describe('CommitteFindService', () => {
  let service: CommitteFindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommitteFindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
