import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleDeleteService {

  constructor(
    private _http: HttpClient
  ) { }

  public delete(id: string, eventID: string): Observable<any> {
    //return this._http.delete(`${environment.API_URL.BASE}${environment.API_URL.PERSON}/${personID}`);
    return null;
  }

  public deleteAll(eventID: string): Observable<any> {
    //return this._http.delete()
    return null;
  }
}
