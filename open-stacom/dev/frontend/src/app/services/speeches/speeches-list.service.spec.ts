import { TestBed } from '@angular/core/testing';

import { SpeechesListService } from './speeches-list.service';

describe('SpeechesListService', () => {
  let service: SpeechesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeechesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
