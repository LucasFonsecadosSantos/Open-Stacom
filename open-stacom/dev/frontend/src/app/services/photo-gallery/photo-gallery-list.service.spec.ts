import { TestBed } from '@angular/core/testing';

import { PhotoGalleryListService } from './photo-gallery-list.service';

describe('PhotoGalleryListService', () => {
  let service: PhotoGalleryListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoGalleryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
