import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Person } from './../../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonFindService {

  constructor(private http: HttpClient) { }

  public list(eventID: string): Observable<Person[]> {
    return this.http.get<Person[]>(`${environment.API_URL.BASE}${environment.API_URL.PERSON}`)
                      .pipe(map(result => {
                          const personArray = <any[]>result;
                          //this._buildSources(personArray, eventID);
                          return personArray;
                      }));
  }

  private _buildSources(personArray: Person[], eventID: string): Person[] {

    personArray.forEach(person => {
      person.avatar = this._buildPersonAvatarSource(person.avatar, eventID);
    })

    return personArray;

  }

  private _buildPersonAvatarSource(personAvatar: string, eventID: string): string {

    return (personAvatar && (personAvatar != null) && (personAvatar.length > 0)) ?
            personAvatar = `/data/${eventID}/img/avatar/${personAvatar}` :
            `/assets/img/default-avatar.png`;

  }
}
