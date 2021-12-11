import { TestBed } from '@angular/core/testing';

import { WebpageGenerationService } from './webpage-generation.service';

describe('WebpageGenerationService', () => {
  let service: WebpageGenerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebpageGenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
