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
import { SharedPersonService } from './person';
import { SharedEventService, SharedTemplateService } from '../services/shared';
import { CommitteComponent } from './committe';
import { SharedActivityService } from './activity';
import { PriceComponent } from './price/price.component';

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
    CallsComponent,
    CommitteComponent,
    PriceComponent
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
    CallsComponent,
    PriceComponent
  ],
  providers: [
    SharedPersonService,
    SharedEventService,
    SharedTemplateService,
    SharedActivityService
  ]
})
export class PagesModule { }
