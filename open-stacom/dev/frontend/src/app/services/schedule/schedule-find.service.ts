import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, scheduled } from 'rxjs';
import { Schedule } from 'src/app/models/schedule.model';
import { environment } from 'src/environments/environment';
import { ActivityFindService } from '../activity';
import { EventFindService } from '../event';

@Injectable({
  providedIn: 'root'
})
export class ScheduleFindService {

  constructor(
    private _eventFindService: EventFindService,
    private _activityFindService: ActivityFindService
  ) { }

  public find(id: string, eventID: string): Observable<Schedule> {

    return this._eventFindService
        .find(eventID)
        .pipe(
          map(
            result => {
              let fetched: Schedule = this._getByID(id, result.template.objects.schedule.content);
              this._fetchActivity([fetched], eventID);
              return fetched;
            }
          )
        );

  }

  private _getByID(id: string, array: Schedule[]): Schedule {

    return array.find(entity => entity.id == id);

  }

  public list(eventID: string): Observable<Schedule[]> {

    return this._eventFindService
        .find(eventID)
        .pipe(
          map(
            result => {
              let fetched: Schedule[] = result.template.objects.schedule.content;
              this._fetchActivity(fetched, eventID);
              return fetched;
            }
          )
        );

  }

  private _fetchActivity(scheduleArray: Schedule[], eventID: string): void {

    scheduleArray.forEach(

      schedule => {

        this._activityFindService
            .find(schedule.activity.id, eventID)
            .subscribe(
              activity => {
                schedule.activity = activity ? activity : undefined;
              }
            );

      }
    );

  }
}
