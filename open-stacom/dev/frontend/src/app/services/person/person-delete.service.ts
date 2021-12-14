import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Person, Event, Template } from './../../models';
import { EventUpdateService } from '../event';
@Injectable({
  providedIn: 'root'
})
export class PersonDeleteService {


  constructor(
    private _eventUpdateService: EventUpdateService
  ) { }

  public delete(person: Person, event: Event): Observable<any> {

    return this._eventUpdateService
                .update(this._getEvent(person, event));

  }

  public deleteAll(event: Event): Observable<any> {

    return this._eventUpdateService
                .update(this._removeAllPerson(event));

  }

  private _removeAllPerson(event: Event): Event {

    event.template.objects.person.content = [];
    return event;

  }

  private _getEvent(person: Person, event: Event): Event {


    event.template.objects.person.content.forEach(
      fetched => {
        if (fetched.id != person.id) {
          fetched = null;
        }
      }
    );

      return event;

  }

  private _removePersonFromEvent(person: Person, event: Event): Person[] {

    return event.template.objects.person.content.filter(fetched => fetched.id != person.id);

  }

}
