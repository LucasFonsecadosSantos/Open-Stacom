import { TestBed } from '@angular/core/testing';

import { VideoGalleryUpdateService } from './video-gallery-update.service';

describe('VideoGalleryUpdateService', () => {
  let service: VideoGalleryUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoGalleryUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
