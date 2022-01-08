import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event, Proceeding } from 'src/app/models';
import { EventUpdateService } from '../event';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ProceedingCreateService {

  constructor(
    private _eventUpdateService: EventUpdateService
  ) { }

  public create(proceeding: Proceeding, event: Event): Observable<any> {

    return this._eventUpdateService.update(this._addDataToEvent(proceeding, event));

  }

  private _addDataToEvent(proceeding: Proceeding, event: Event): Event {

    proceeding.id = uuidv4();

    event.template
          .objects
          .proceeding
          .content
          .push(proceeding);

    return event;

  }
}
