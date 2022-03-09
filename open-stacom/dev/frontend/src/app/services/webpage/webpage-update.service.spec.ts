import { TestBed } from '@angular/core/testing';

import { WebpageUpdateService } from './webpage-update.service';

describe('WebpageUpdateService', () => {
  let service: WebpageUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebpageUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
