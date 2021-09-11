import { TestBed } from '@angular/core/testing';

import { PhotoGalleryFindService } from './photo-gallery-find.service';

describe('PhotoGalleryFindService', () => {
  let service: PhotoGalleryFindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoGalleryFindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
