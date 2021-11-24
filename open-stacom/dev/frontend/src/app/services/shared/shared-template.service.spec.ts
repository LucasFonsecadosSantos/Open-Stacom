import { TestBed } from '@angular/core/testing';

import { SharedTemplateService } from './shared-template.service';

describe('SharedTemplateService', () => {
  let service: SharedTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
