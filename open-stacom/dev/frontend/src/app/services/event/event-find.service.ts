import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Event, Webpage } from './../../models';

@Injectable({
  providedIn: 'root'
})
export class EventFindService {

  constructor(
  ) { }

  public find(webpage: Webpage): Webpage {

    webpage.template
            .objects
            .event
            .content
            .logo = this._buildSources(webpage.template.objects.event.content);

    return webpage.template.objects.event.content;

  }

  private _buildSources(event: Event): string {

    return (event.logo && (event.logo != null) && (event.logo.length > 0)) ?
            event.logo = `/data/${event.id}/img/avatar/${event.logo}` :
            environment.DEFAULT_AVATAR_PICTURE_PATH;

  }

}
