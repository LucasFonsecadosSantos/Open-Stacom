import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import {
  Committee
} from './../../models';

@Injectable({
  providedIn: 'root'
})
export class CommitteFindService {

  constructor(private http: HttpClient) { }

  public find(): Observable<Committee> {

    return null;

  }

  public list(eventID: string): Observable<Committee[]> {
    return this.http.get<Committee[]>(`${environment.API_URL.BASE}${environment.API_URL.COMMITTEE}`)
                      .pipe(map(result => {
                          const personArray = <any[]>result;
                          //this._buildSources(personArray, eventID);
                          return personArray;
                      }));
  }

  // private _buildSources(personArray: Committee[], eventID: string): Committee[] {

  //   personArray.forEach(person => {
  //     person.avatar = this._buildPersonAvatarSource(person.avatar, eventID);
  //   })

  //   return personArray;

  // }

  // private _buildPersonAvatarSource(personAvatar: string, eventID: string): string {

  //   return (personAvatar && (personAvatar != null) && (personAvatar.length > 0)) ?
  //           personAvatar = `/data/${eventID}/img/avatar/${personAvatar}` :
  //           `/assets/img/default-avatar.png`;

  // }

}
