import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Event } from './../../models';

@Injectable({
  providedIn: 'root'
})
export class EventUpdateService {

  constructor(
    private _http: HttpClient
  ) { }

  public update(event: Event): Observable<Event> {

    return this._http.put<Event>(
      `${environment.API_URL.BASE}${environment.API_URL.EVENT}`,
      event
    )

  }
}
