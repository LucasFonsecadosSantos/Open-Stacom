import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEditionTimelineComponent } from './event-edition-timeline.component';

describe('EventEditionTimelineComponent', () => {
  let component: EventEditionTimelineComponent;
  let fixture: ComponentFixture<EventEditionTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventEditionTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEditionTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
