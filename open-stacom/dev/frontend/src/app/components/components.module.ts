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
    ActivityListComponent
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
    ActivityFormComponent
  ]
})
export class ComponentsModule {}
