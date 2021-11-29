import { TestBed } from '@angular/core/testing';

import { PreviousEditionFormService } from './previous-edition-form.service';

describe('PreviousEditionFormService', () => {
  let service: PreviousEditionFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviousEditionFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
