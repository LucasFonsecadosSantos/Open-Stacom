import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Event } from './../../models';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class EventCreateService {

  constructor(
    private http: HttpClient
  ) { }

  create(templateid: string): Observable<Event> {

    return this.http.post<Event>(
      `${environment.API_URL.BASE}${environment.API_URL.EVENT}`,
      {
        id: uuidv4(),
        templateID: templateid
      },
      {
        reportProgress: true,
        responseType: 'json',
      }
    );
  }
}
