import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Person } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class PersonCreateService {

  constructor(
    private _http: HttpClient
  ) { }

  public create(person: Person): Observable<any> {
    return this._http.post(
      `${environment.API_URL.BASE}${environment.API_URL.PERSON}`,
      person
    );
  }

}
