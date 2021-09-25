import { PersonPageService } from './person';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components';

import {
  AboutComponent,
  ActivityComponent,
  DashboardComponent,
  EventComponent,
  PersonComponent,
  PhotoGalleryComponent,
  VideoGalleryComponent,
  VersioningComponent,
  ScheduleComponent,
  SponsorshipComponent,
  PreviousEditionsComponent,
  CallsComponent
} from './';

@NgModule({
  declarations: [
    AboutComponent,
    ActivityComponent,
    DashboardComponent,
    EventComponent,
    PersonComponent,
    PhotoGalleryComponent,
    VideoGalleryComponent,
    ScheduleComponent,
    VersioningComponent,
    SponsorshipComponent,
    PreviousEditionsComponent,
    CallsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    AboutComponent,
    ActivityComponent,
    DashboardComponent,
    EventComponent,
    PersonComponent,
    PhotoGalleryComponent,
    VideoGalleryComponent,
    ScheduleComponent,
    VersioningComponent,
    SponsorshipComponent,
    PreviousEditionsComponent,
    CallsComponent
  ],
  providers: [
    PersonPageService
  ]
})
export class PagesModule { }
