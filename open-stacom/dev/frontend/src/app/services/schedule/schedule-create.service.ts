import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity, Event } from 'src/app/models';
import { Schedule } from 'src/app/models/schedule.model';
import { EventUpdateService } from '../event';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ScheduleCreateService {

  constructor(
    private _eventUpdateService: EventUpdateService
  ) { }

  public create(schedule: Schedule, event: Event): Observable<any> {

    return this._eventUpdateService.update(this._addDataToEvent(schedule, event));

  }

  private _addDataToEvent(schedule: Schedule, event: Event): Event {

    schedule.id = uuidv4();
    schedule.activity = {'id': schedule.activity.id};
    event.template
          .objects
          .schedule
          .content
          .forEach(
            schedule =>
              schedule.activity = {'id': schedule.activity.id}
            );

    event.template
            .objects
            .activity
            .content
            .forEach(
              activity =>
                activity.responsible = {'id': activity.responsible.id}
              );

    event.template
          .objects
          .schedule
          .content
          .push(schedule);

    return event;

  }
}
