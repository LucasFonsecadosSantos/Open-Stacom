import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGalleryFormComponent } from './video-gallery-form.component';

describe('VideoGalleryFormComponent', () => {
  let component: VideoGalleryFormComponent;
  let fixture: ComponentFixture<VideoGalleryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoGalleryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGalleryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
