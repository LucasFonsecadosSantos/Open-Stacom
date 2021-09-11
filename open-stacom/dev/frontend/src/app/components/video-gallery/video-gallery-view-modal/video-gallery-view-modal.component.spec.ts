import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGalleryViewModalComponent } from './video-gallery-view-modal.component';

describe('VideoGalleryViewModalComponent', () => {
  let component: VideoGalleryViewModalComponent;
  let fixture: ComponentFixture<VideoGalleryViewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoGalleryViewModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGalleryViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
