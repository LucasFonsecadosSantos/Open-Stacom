import { PersonCreateService } from './../../services/person/person-create.service';
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { PagesModule } from "src/app/pages";

import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import {
  ServicesModule
} from './../../services';
import { TemplatesRetrievingService } from "src/app/services/templates";
import { EventCreateService } from "src/app/services/event";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    PagesModule,
    ServicesModule
  ],
  declarations: [

    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent
  ],
  providers: [
    TemplatesRetrievingService,
    EventCreateService,
    PersonCreateService
  ]
})
export class AdminLayoutModule {}
