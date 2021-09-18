import { TestBed } from '@angular/core/testing';

import { TemplatesRetrievingService } from './templates-retrieving.service';

describe('TemplatesRetrievingService', () => {
  let service: TemplatesRetrievingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplatesRetrievingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
