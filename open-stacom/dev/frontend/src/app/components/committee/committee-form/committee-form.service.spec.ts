import { TestBed } from '@angular/core/testing';

import { CommitteeFormService } from './committee-form.service';

describe('CommitteFormService', () => {
  let service: CommitteeFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommitteeFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
