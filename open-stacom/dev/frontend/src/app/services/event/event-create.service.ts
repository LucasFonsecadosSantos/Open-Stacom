import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Event, Template } from './../../models';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class EventCreateService {

  constructor(
    private http: HttpClient
  ) { }

  public createEvent(event: Event): Observable<Event> {

    const token = uuidv4();

    return this.http.post<Event>(
      `${environment.API_URL.BASE}${environment.API_URL.EVENT}`,
      {
        id: token,
        event: event,
        token: token
      },
      {
        reportProgress: true,
        responseType: 'json',
      }
    );
  }

  public create(template: Template): Observable<Event> {

    const token = uuidv4();

    return this.http.post<Event>(
      `${environment.API_URL.BASE}${environment.API_URL.EVENT}`,
      {
        id: token,
        template: template,
        token: token
      },
      {
        reportProgress: true,
        responseType: 'json',
      }
    );
  }

}
