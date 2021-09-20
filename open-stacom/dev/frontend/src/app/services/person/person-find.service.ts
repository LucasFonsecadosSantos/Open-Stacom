import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Person } from './../../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonFindService {

  constructor(private http: HttpClient) { }

  list(): Observable<Person[]> {
    return this.http.get<Person[]>(`${environment.API_URL.BASE}${environment.API_URL.PERSON}`);
  }

  // static buildSources(personArray: Person[]): Person[] {



  // }
}
