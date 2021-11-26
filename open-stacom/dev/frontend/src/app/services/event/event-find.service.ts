import { Observable } from 'rxjs';
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
    );

  }
}
