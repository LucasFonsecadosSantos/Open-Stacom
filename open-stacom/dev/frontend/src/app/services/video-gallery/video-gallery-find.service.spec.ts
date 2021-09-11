import { TestBed } from '@angular/core/testing';

import { VideoGalleryFindService } from './video-gallery-find.service';

describe('VideoGalleryFindService', () => {
  let service: VideoGalleryFindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoGalleryFindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
