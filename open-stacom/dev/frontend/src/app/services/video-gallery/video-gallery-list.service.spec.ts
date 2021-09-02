import { TestBed } from '@angular/core/testing';

import { VideoGalleryListService } from './video-gallery-list.service';

describe('VideoGalleryListService', () => {
  let service: VideoGalleryListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoGalleryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
