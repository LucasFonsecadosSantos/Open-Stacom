import { TestBed } from '@angular/core/testing';

import { TemplateObjectValidatorService } from './template-object-validator.service';

describe('TemplateObjectValidatorService', () => {
  let service: TemplateObjectValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateObjectValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
