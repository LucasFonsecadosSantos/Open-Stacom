import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from './../../models';
import { Schedule } from 'src/app/models/schedule.model';
import { EventUpdateService } from '../event';

@Injectable({
  providedIn: 'root'
})
export class ScheduleDeleteService {

  constructor(
    private _eventUpdateService: EventUpdateService
  ) { }

  public delete(schedule: Schedule, event: Event): Observable<any> {

    return this._eventUpdateService
                .update(this._getEvent(schedule, event));

  }

  public deleteAll(event: Event): Observable<any> {

    return this._eventUpdateService
                .update(this._removeAllSchedule(event));

  }

  private _removeAllSchedule(event: Event): Event {

    event.template.objects.schedule.content = [];
    return event;

  }

  private _getEvent(schedule: Schedule, event: Event): Event {


    event.template.objects.schedule.content.forEach(
      fetched => {
        if (fetched.id != schedule.id) {
          fetched = null;
        }
      }
    );

      return event;

  }

  private _removeScheduleFromEvent(schedule: Schedule, event: Event): Schedule[] {

    return event.template.objects.schedule.content.filter(fetched => fetched.id != schedule.id);

  }
}
