import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PreviousEdition, Event } from 'src/app/models';
import { EventUpdateService } from '../event';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class PreviousEditionCreateService {

  constructor(
    private _eventUpdateService: EventUpdateService
  ) { }

  public create(edition: PreviousEdition, event: Event): Observable<PreviousEdition> {

    return this._eventUpdateService.update(this._addDataToEvent(edition, event));

  }

  private _addDataToEvent(edition: PreviousEdition, event: Event): Event {

    edition.id = uuidv4();

    event.template
          .objects
          .pastEdition
          .content
          .push(edition);

    return event;

  }


}
