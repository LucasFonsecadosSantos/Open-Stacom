import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proceeding, Event, Template } from 'src/app/models';
import { environment } from 'src/environments/environment';
import { EventUpdateService } from '../event';

@Injectable({
  providedIn: 'root'
})
export class ProceedingUpdateService {

  constructor(
    private _eventUpdateService: EventUpdateService
  ) { }

  public update(proceeding: Proceeding, event: Event): Observable<any> {

    return this._eventUpdateService.update(this._updateDataToEvent(proceeding, event));

  }

  private _updateDataToEvent(proceeding: Proceeding, event: Event): Event {

    event.template
          .objects
          .proceeding
          .content = event.template.objects
                          .proceeding
                          .content
                          .filter(
                            fetchedSchedule => fetchedSchedule.id != proceeding.id
                          );


    event.template
         .objects
         .proceeding
         .content
         .push(proceeding);

    return event;

  }
}
