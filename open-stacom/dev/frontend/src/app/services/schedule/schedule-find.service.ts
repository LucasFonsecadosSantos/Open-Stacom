import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Schedule } from 'src/app/models/schedule.model';
import { environment } from 'src/environments/environment';
import { ActivityFindService } from '../activity';

@Injectable({
  providedIn: 'root'
})
export class ScheduleFindService {

  constructor(
    private http: HttpClient,
    private _activityFindService: ActivityFindService
  ) { }

  public find(id: string, eventID: string): Observable<Schedule> {

    return this.http
                .get<Schedule>(`${environment.API_URL.BASE}${environment.API_URL.SCHEDULE}/${id}`)
                .pipe(
                  map(
                    result => {
                      this._fetchActivity([result], eventID);
                      return result;
                    }
                  )
                );

  }

  public list(eventID: string): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${environment.API_URL.BASE}${environment.API_URL.SCHEDULE}`)
                      .pipe(map(result => {
                          const scheduleArray = <any[]>result;
                          this._fetchActivity(scheduleArray, eventID);
                          return scheduleArray;
                      }));
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
