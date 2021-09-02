import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  NavbarComponent,
  FooterComponent,
  HeaderComponent,
  ContentComponent

} from './template';

import {
  AboutComponent,
  VersionComponent,
  SponsorshipComponent,
  PhotoGalleryComponent,
  VideoGalleryComponent,
  ScheduleComponent,
  EventComponent,
  HomeComponent,
  ActivityComponent,
  LivestreamComponent,
  EventEditionTimelineComponent

} from './pages';

import {
  ActivityRemoveService,
  ActivityCreateService,
  ActivityListService,
  EventEditionTimelineCreateService,
  EventEditionTimelineListService,
  EventEditionTimelineRemoveService,
  LivestreamCreateService,
  LivestreamListService,
  LivestreamRemoveService,
  PersonCreateService,
  PersonListService,
  PersonRemoveService,
  PhotoGalleryCreateService,
  PhotoGalleryListService,
  PhotoGalleryRemoveService,
  ScheduleCreateService,
  ScheduleListService,
  ScheduleRemoveService,
  SpeechesCreateService,
  SpeechesListService,
  SponsorRemoveService,
  SponsorCreateService,
  SponsorListService,
  VideoGalleryCreateService,
  VideoGalleryListService,
  VideoGalleryRemoveService
} from './services';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    VersionComponent,
    SponsorshipComponent,
    PhotoGalleryComponent,
    VideoGalleryComponent,
    ScheduleComponent,
    EventComponent,
    HomeComponent,
    ActivityComponent,
    HeaderComponent,
    ContentComponent,
    LivestreamComponent,
    EventEditionTimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ActivityRemoveService,
    ActivityCreateService,
    ActivityListService,
    EventEditionTimelineCreateService,
    EventEditionTimelineListService,
    EventEditionTimelineRemoveService,
    LivestreamCreateService,
    LivestreamListService,
    LivestreamRemoveService,
    PersonCreateService,
    PersonListService,
    PersonRemoveService,
    PhotoGalleryCreateService,
    PhotoGalleryListService,
    PhotoGalleryRemoveService,
    ScheduleCreateService,
    ScheduleListService,
    ScheduleRemoveService,
    SpeechesCreateService,
    SpeechesListService,
    SponsorRemoveService,
    SponsorCreateService,
    SponsorListService,
    SponsorRemoveService,
    VideoGalleryCreateService,
    VideoGalleryListService,
    VideoGalleryRemoveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
