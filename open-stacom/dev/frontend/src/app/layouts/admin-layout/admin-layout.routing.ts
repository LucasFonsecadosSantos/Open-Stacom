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
  CallsComponent,
  CommitteComponent,
  PriceComponent,
  ProceedingsComponent

} from "../../pages";

export const AdminLayoutRoutes: Routes = [
  // { path: "dashboard", component: DashboardComponent },
  { path: "", component: DashboardComponent },
  { path: "home", component: DashboardComponent },
  { path: "inicio/:webpageID", component: DashboardComponent },

  { path: "sobre", component: AboutComponent },
  { path: "about", component: AboutComponent },

  { path: "pessoa", component: PersonComponent },
  { path: "pessoas", component: PersonComponent },
  { path: "person", component: PersonComponent },

  { path: "anais", component: ProceedingsComponent },
  { path: "anal", component: ProceedingsComponent },
  { path: "proceeding", component: ProceedingsComponent },
  { path: "proceedings", component: ProceedingsComponent },

  { path: "pacotes", component: PriceComponent },
  { path: "pacote", component: PriceComponent },
  { path: "precos", component: PriceComponent },
  { path: "prices", component: PriceComponent },
  { path: "preco", component: PriceComponent },
  { path: "price", component: PriceComponent },

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

];
