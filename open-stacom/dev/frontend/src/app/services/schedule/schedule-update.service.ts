import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/app/models';
import { Schedule } from 'src/app/models/schedule.model';
import { EventUpdateService } from '../event';

@Injectable({
  providedIn: 'root'
})
export class ScheduleUpdateService {

  constructor(
    private _eventUpdateService: EventUpdateService
  ) { }

  public update(schedule: Schedule, event: Event): Observable<any> {

    return this._eventUpdateService.update(this._updateDataToEvent(schedule, event));

  }

  private _updateDataToEvent(schedule: Schedule, event: Event): Event {

    event.template.objects.schedule.content = event.template.objects
                  .schedule
                  .content
                  .filter(
                    fetchedSchedule => fetchedSchedule.id != schedule.id
                  );

    schedule.activity = {id: schedule.activity.id};

    event.template.objects
                .schedule
                .content
                .push(schedule);


    return event;

  }
}
