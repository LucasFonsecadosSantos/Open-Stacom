import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class PersonUpdateService {

  constructor(
    private _http: HttpClient
  ) { }

  public update(person: Person): Observable<any> {

    return this._http.put(
      `${environment.API_URL.BASE}${environment.API_URL.PERSON}`,
      person
    );

  }
}
