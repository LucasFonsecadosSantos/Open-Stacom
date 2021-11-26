import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Person } from './../../models';
@Injectable({
  providedIn: 'root'
})
export class PersonDeleteService {

  constructor(
    private _http: HttpClient
  ) { }

  public delete(personID: string, eventID: string): Observable<any> {
    //return this._http.delete(`${environment.API_URL.BASE}${environment.API_URL.PERSON}/${personID}`);
    return null;
  }

  public deleteAll(eventID: string): Observable<any> {
    //return this._http.delete()
    return null;
  }

}
