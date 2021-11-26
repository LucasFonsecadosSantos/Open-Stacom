import { TestBed } from '@angular/core/testing';

import { TemplateFindService } from './template-find.service';

describe('TemplateFindService', () => {
  let service: TemplateFindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateFindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
