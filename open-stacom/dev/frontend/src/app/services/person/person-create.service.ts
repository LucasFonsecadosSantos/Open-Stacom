import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Person, Event } from 'src/app/models';
import { EventUpdateService } from '../event';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class PersonCreateService {

  constructor(
    private _eventUpdateService: EventUpdateService
  ) { }

  public create(person: Person, event: Event): Observable<any> {

    return this._eventUpdateService.update(this._addDataToEvent(person, event));

  }

  private _addDataToEvent(person: Person, event: Event): Event {

    person.id = uuidv4();

    event.template
          .objects
          .person
          .content
          .push(person);

    return event;

  }

}
