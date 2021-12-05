import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Event } from './../../models';

@Injectable({
  providedIn: 'root'
})
export class EventFindService {

  constructor(
    private http: HttpClient
  ) { }

  find(eventID: string): Observable<Event> {

    return this.http.get<Event>(
      `${environment.API_URL.BASE}${environment.API_URL.EVENT}/${eventID}`,
      {
        responseType: 'json'
      }
    ).pipe(
      map(
        event => {
          event.logo = this._buildSources(event);
          return event;
        }
      )
    );

  }

  private _buildSources(event: Event): string {

    return (event.logo && (event.logo != null) && (event.logo.length > 0)) ?
            event.logo = `/data/${event.id}/img/avatar/${event.logo}` :
            `/assets/img/default-avatar.png`;

  }

}
