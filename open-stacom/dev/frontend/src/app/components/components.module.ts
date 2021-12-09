import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, } from "@angular/forms";
import { NgxMaskModule, IConfig } from "ngx-mask";

import { FooterComponent } from "./footer";
import { NavbarComponent } from "./navbar";
import { SidebarComponent } from "./sidebar";
import {
  EventInfoComponent,
  EventFormComponent
} from './event';
import {
  PersonFormComponent,
  PersonListComponent,
  PersonInfoComponent,
  PersonFormService
} from './person';
import {
  SponsorListComponent,
  SponsorInfoComponent,
  SponsorFormComponent
} from './sponsor';
import {
  ActivityInfoComponent,
  ActivityFormComponent,
  ActivityListComponent,
  ActivityFormService
} from './activity';
import {
  ScheduleFormComponent,
  ScheduleFormService,
  ScheduleListComponent
} from './schedule';
import {
  PreviousEditionListComponent,
  PreviousEditionFormComponent,
  PreviousEditionInfoComponent,
  PreviousEditionFormService
} from './previous-editions';
import {
  CommitteeFormComponent,
  CommitteeFormService,
  CommitteeInfoComponent,
  CommitteeListComponent
} from './committee';
import {
  CallsListComponent,
  CallsInfoComponent,
  CallsFormComponent
} from './calls';
import {
  PhotoGalleryFormComponent,
  PhotoGalleryViewModalComponent
} from './photo-gallery';
import {
  VideoGalleryFormComponent,
  VideoGalleryViewModalComponent
} from './video-gallery';
import { WelcomeComponent } from './welcome';
import {
  TemplateChoiceComponent
} from './template-choice';
import {
  ConfirmDialogComponent,
  ConfirmDialogService
} from './dialog';
import {
  PriceFormComponent,
  PriceListComponent
} from './price';
import {
  ProceedingFormService,
  ProceedingInfoComponent,
  ProceedingFormComponent,
  ProceedingListComponent
} from './proceeding';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,

    EventInfoComponent,
    EventFormComponent,

    PersonFormComponent,
    PersonListComponent,
    PersonInfoComponent,

    SponsorFormComponent,
    SponsorListComponent,
    SponsorInfoComponent,

    ActivityInfoComponent,
    ActivityFormComponent,
    ActivityListComponent,

    ScheduleFormComponent,
    ScheduleListComponent,

    CommitteeFormComponent,
    CommitteeInfoComponent,
    CommitteeListComponent,

    PreviousEditionListComponent,
    PreviousEditionFormComponent,
    PreviousEditionInfoComponent,

    CallsListComponent,
    CallsInfoComponent,
    CallsFormComponent,

    PhotoGalleryFormComponent,
    PhotoGalleryViewModalComponent,

    VideoGalleryFormComponent,
    VideoGalleryViewModalComponent,

    WelcomeComponent,
    TemplateChoiceComponent,
    ConfirmDialogComponent,

    PriceFormComponent,
    PriceListComponent,

    ProceedingListComponent,
    ProceedingInfoComponent,
    ProceedingFormComponent

],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,

    EventFormComponent,
    EventInfoComponent,

    PersonInfoComponent,
    PersonFormComponent,
    PersonListComponent,

    SponsorFormComponent,
    SponsorInfoComponent,
    SponsorListComponent,

    ActivityInfoComponent,
    ActivityListComponent,
    ActivityFormComponent,

    ScheduleFormComponent,
    ScheduleListComponent,

    PreviousEditionListComponent,
    PreviousEditionFormComponent,
    PreviousEditionInfoComponent,

    CommitteeFormComponent,
    CommitteeInfoComponent,
    CommitteeListComponent,

    CallsListComponent,
    CallsInfoComponent,
    CallsFormComponent,

    PhotoGalleryFormComponent,
    PhotoGalleryViewModalComponent,

    VideoGalleryFormComponent,
    VideoGalleryViewModalComponent,

    WelcomeComponent,
    TemplateChoiceComponent,

    ConfirmDialogComponent,

    PriceFormComponent,
    PriceListComponent,

    ProceedingFormComponent,
    ProceedingListComponent,
    ProceedingInfoComponent
  ],
  providers: [
    ConfirmDialogService,
    PersonFormService,
    PreviousEditionFormService,
    CommitteeFormService,
    ActivityFormService,
    ScheduleFormService,
    ProceedingFormService
  ]
})
export class ComponentsModule {}
