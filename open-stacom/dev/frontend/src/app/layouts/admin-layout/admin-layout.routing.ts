import { Routes } from "@angular/router";

import {
  DashboardComponent,
  SponsorshipComponent,
  AboutComponent,
  PersonComponent,
  EventComponent,
  PhotoGalleryComponent,
  VideoGalleryComponent,
  ActivityComponent,
  ScheduleComponent,
  VersioningComponent,
  PreviousEditionsComponent,
  CallsComponent
} from "../../pages";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { CommitteComponent } from "src/app/pages/committe";

export const AdminLayoutRoutes: Routes = [
  // { path: "dashboard", component: DashboardComponent },
  { path: "", component: DashboardComponent },
  { path: "home", component: DashboardComponent },
  { path: "inicio/:eventID", component: DashboardComponent },

  { path: "sobre", component: AboutComponent },
  { path: "about", component: AboutComponent },

  { path: "pessoa", component: PersonComponent },
  { path: "pessoas", component: PersonComponent },
  { path: "person", component: PersonComponent },

  { path: "pacotes", component: null },
  { path: "pacote", component: null },

  { path: "committee", component: CommitteComponent },
  { path: "committees", component: CommitteComponent },
  { path: "comite", component: CommitteComponent },
  { path: "comites", component: CommitteComponent },

  { path: "evento", component: EventComponent },
  { path: "event", component: EventComponent },

  { path: "fotos", component: PhotoGalleryComponent },
  { path: "photo-gallery", component: PhotoGalleryComponent },

  { path: "videos", component: VideoGalleryComponent },
  { path: "video-gallery", component: VideoGalleryComponent },

  { path: "about", component: AboutComponent },
  { path: "sobre", component: AboutComponent },

  { path: "versionamento", component: VersioningComponent },
  { path: "versioning", component: VersioningComponent },

  { path: "atividade", component: ActivityComponent },
  { path: "atividades", component: ActivityComponent },
  { path: "activity", component: ActivityComponent },

  { path: "patrocinio", component: SponsorshipComponent },
  { path: "patrocinadores", component: SponsorshipComponent },
  { path: "sponsorship", component: SponsorshipComponent },

  { path: "calls", component: CallsComponent },
  { path: "chamadas", component: CallsComponent },
  { path: "prazos", component: CallsComponent },

  { path: "programacao", component: ScheduleComponent },
  { path: "trilhas", component: ScheduleComponent },
  { path: "sessoes", component: ScheduleComponent },
  { path: "schedule", component: ScheduleComponent },

  { path: "edicoes", component: PreviousEditionsComponent },
  { path: "edicoes-anteriores", component: PreviousEditionsComponent },
  { path: "previous-editions", component: PreviousEditionsComponent },

  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent }
];
