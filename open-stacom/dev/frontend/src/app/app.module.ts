import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { FooterComponent } from './template/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { VersionComponent } from './pages/version/version.component';
import { SponsorshipComponent } from './pages/sponsorship/sponsorship.component';
import { PhotoGalleryComponent } from './pages/photo-gallery/photo-gallery.component';
import { VideoGalleryComponent } from './pages/video-gallery/video-gallery.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { EventComponent } from './pages/event/event.component';
import { HomeComponent } from './pages/home/home.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { HeaderComponent } from './template/header/header.component';
import { ContentComponent } from './template/content/content.component';
import { LivestreamComponent } from './pages/livestream/livestream.component';
import { EventEditionTimelineComponent } from './pages/event-edition-timeline/event-edition-timeline.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
