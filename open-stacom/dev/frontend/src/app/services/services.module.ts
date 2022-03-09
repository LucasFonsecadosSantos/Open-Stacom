import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlService } from './utils/url.service';
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
  EventFindService,
  WebpageGenerationService,
  EventCloseService
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

import {
  VideoGalleryDeleteService,
  VideoGalleryUpdateService,
  VideoGalleryCreateService,
  VideoGalleryFindService
} from './video-gallery';

import {
  ProjectUploadService
} from './welcome';

import {
  TemplatesRetrievingService,
  TemplateFindService
} from './templates';

import {
  ExcelExportService
} from './utils';
import {
  SharedTemplateService,
  SharedWebpageService
} from './shared';
import {
  PricePlanCreateService,
  PricePlanDeleteService,
  PricePlanFindService,
  PricePlanUpdateService
} from './price-plan';
import {
  ProceedingFindService,
  ProceedingUpdateService,
  ProceedingDeleteService,
  ProceedingCreateService
} from './proceeding';

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

    VideoGalleryDeleteService,
    VideoGalleryUpdateService,
    VideoGalleryCreateService,
    VideoGalleryFindService,

    PreviousEditionDeleteService,
    PreviousEditionUpdateService,
    PreviousEditionCreateService,
    PreviousEditionFindService,

    EventCreateService,
    EventUpdateService,
    EventFindService,
    EventCloseService,

    ProjectUploadService,

    TemplateFindService,
    TemplatesRetrievingService,

    ExcelExportService,

    UrlService,

    SharedTemplateService,
    SharedWebpageService,

    PricePlanCreateService,
    PricePlanDeleteService,
    PricePlanFindService,
    PricePlanUpdateService,

    ProceedingFindService,
    ProceedingCreateService,
    ProceedingDeleteService,
    ProceedingUpdateService,

    WebpageGenerationService
  ]
})
export class ServicesModule { }
