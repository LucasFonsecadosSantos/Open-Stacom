import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

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
  PersonInfoComponent
} from './person';
import {
  SponsorListComponent,
  SponsorInfoComponent,
  SponsorFormComponent
} from './sponsor';
import {
  ActivityInfoComponent,
  ActivityFormComponent,
  ActivityListComponent
} from './activity';
import {
  ScheduleFormComponent,
  ScheduleTableComponent
} from './schedule';
import {
  PreviousEditionListComponent,
  PreviousEditionFormComponent,
  PreviousEditionInfoComponent
} from './previous-editions';
import {
  CommitteeFormComponent,
  CommitteeInfoComponent,
  CommitteeListComponent
} from './committee';
import {
  CallsListComponent,
  CallsInfoComponent,
  CallsFormComponent
} from './calls';
@NgModule({
  imports: [CommonModule, RouterModule, NgbModule],
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
    ScheduleTableComponent,

    CommitteeFormComponent,
    CommitteeInfoComponent,
    CommitteeListComponent,

    PreviousEditionListComponent,
    PreviousEditionFormComponent,
    PreviousEditionInfoComponent,

    CallsListComponent,
    CallsInfoComponent,
    CallsFormComponent
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
    SponsorFormComponent,

    ActivityInfoComponent,
    ActivityListComponent,
    ActivityFormComponent,

    ScheduleFormComponent,
    ScheduleTableComponent,

    PreviousEditionListComponent,
    PreviousEditionFormComponent,
    PreviousEditionInfoComponent,

    CommitteeFormComponent,
    CommitteeInfoComponent,
    CommitteeListComponent,

    CallsListComponent,
    CallsInfoComponent,
    CallsFormComponent
  ]
})
export class ComponentsModule {}
