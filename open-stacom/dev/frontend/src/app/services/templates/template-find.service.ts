import { map, Observable, of, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Template } from './../../models';
import { environment } from 'src/environments/environment';
import { EventFindService } from '../event';
import { Event } from 'src/app/models/event.model';

@Injectable({
  providedIn: 'root'
})
export class TemplateFindService {

  constructor(
    private http: HttpClient,
    private _eventFindService: EventFindService
  ) { }

  public find(eventID: string): Observable<any> {

    return this._eventFindService
        .find(eventID)
        .pipe(
          map(
            result => {
              return result.template
            }
          )
        );

  }
}
