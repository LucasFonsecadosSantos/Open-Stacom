import { TestBed } from '@angular/core/testing';

import { PhotoGalleryUpdateService } from './photo-gallery-update.service';

describe('PhotoGalleryUpdateService', () => {
  let service: PhotoGalleryUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoGalleryUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
