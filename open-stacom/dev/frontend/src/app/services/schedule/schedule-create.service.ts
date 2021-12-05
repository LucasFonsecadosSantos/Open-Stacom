import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from 'src/app/models/schedule.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleCreateService {

  constructor(
    private _http: HttpClient
  ) { }

  public create(schedule: Schedule): Observable<any> {
    return this._http.post(
      `${environment.API_URL.BASE}${environment.API_URL.SCHEDULE}`,
      schedule
    );
  }
}
