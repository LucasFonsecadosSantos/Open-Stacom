import {
  PersonCreateService,
  PersonDeleteService,
  PersonFindService,
  PersonUpdateService
} from './person';

import {
  ActivityFindService,
  ActivityUpdateService,
  ActivityDeleteService,
  ActivityCreateService
} from './activity';

import {
  ScheduleFindService,
  ScheduleUpdateService,
  ScheduleDeleteService,
  ScheduleCreateService
} from './schedule';

import {
  EventCreateService,
  EventUpdateService,
  EventFindService
} from './event';

import {
  SponsorDeleteService,
  SponsorUpdateService,
  SponsorCreateService,
  SponsorFindService
} from './sponsor';

import {
  PreviousEditionDeleteService,
  PreviousEditionUpdateService,
  PreviousEditionCreateService,
  PreviousEditionFindService
} from './previous-edition';

import {
  CallsDeleteService,
  CallsUpdateService,
  CallsCreateService,
  CallsFindService
} from './calls';

import {
  PhotoGalleryDeleteService,
  PhotoGalleryUpdateService,
  PhotoGalleryCreateService,
  PhotoGalleryFindService
} from './photo-gallery';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PersonUpdateService,
    PersonFindService,
    PersonDeleteService,
    PersonCreateService,

    ActivityCreateService,
    ActivityDeleteService,
    ActivityFindService,
    ActivityUpdateService,

    ScheduleFindService,
    ScheduleUpdateService,
    ScheduleDeleteService,
    ScheduleCreateService,

    SponsorFindService,
    SponsorUpdateService,
    SponsorDeleteService,
    SponsorCreateService,

    CallsDeleteService,
    CallsUpdateService,
    CallsCreateService,
    CallsFindService,

    PhotoGalleryDeleteService,
    PhotoGalleryUpdateService,
    PhotoGalleryCreateService,
    PhotoGalleryFindService,

    PreviousEditionDeleteService,
    PreviousEditionUpdateService,
    PreviousEditionCreateService,
    PreviousEditionFindService,

    EventCreateService,
    EventUpdateService,
    EventFindService
  ]
})
export class ServicesModule { }
