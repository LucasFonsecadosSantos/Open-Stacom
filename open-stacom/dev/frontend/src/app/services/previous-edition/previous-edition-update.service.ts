import { Injectable } from '@angular/core';
import { Event, PreviousEdition } from 'src/app/models';
import { Observable } from 'rxjs';
import { EventUpdateService } from '../event';

@Injectable({
  providedIn: 'root'
})
export class PreviousEditionUpdateService {

  constructor(
    private _eventUpdateService: EventUpdateService
  ) { }

  public update(edition: PreviousEdition, event: Event): Observable<PreviousEdition> {

    return this._eventUpdateService.update(this._updateDataToEvent(edition, event));

  }

  private _updateDataToEvent(edition: PreviousEdition, event: Event): Event {

    event.template
          .objects
          .pastEdition
          .content = event.template
                          .objects
                          .pastEdition
                          .content
                          .filter(
                            fetchedSchedule => fetchedSchedule.id != edition.id
                          );

    event.template
         .objects
         .pastEdition
         .content
         .push(edition);

    return event;

  }

}
