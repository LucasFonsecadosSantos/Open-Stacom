import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PersonFindService } from '../person';

import {
  Committee, Person
} from './../../models';

@Injectable({
  providedIn: 'root'
})
export class CommitteFindService {

  constructor(
    private http: HttpClient,
    private _personFindService: PersonFindService
  ) { }

  public find(): Observable<Committee> {

    return null;

  }

  public simpleList(eventID: string): Observable<Committee[]> {

    return this.http
                .get<Committee[]>(`${environment.API_URL.BASE}${environment.API_URL.COMMITTEE}`)
                .pipe(
                  map(
                    result => {
                      let committeeArray = <any[]>result;
                      //this._buildSources(personArray, eventID);
                      return committeeArray;
                    }
                  )
                );

  }

  public list(eventID: string): Observable<Committee[]> {

    return this.http
                .get<Committee[]>(`${environment.API_URL.BASE}${environment.API_URL.COMMITTEE}`)
                .pipe(
                  map(
                    result => {
                      let committeeArray = <any[]>result;
                      this._fetchMembers(committeeArray);
                      //this._buildSources(personArray, eventID);
                      return committeeArray;
                    }
                  )
                );

  }

  private _fetchMembers(committeeArray: Committee[]): void {

    committeeArray.forEach(
      committee => {
        committee.members.forEach(
          member => this._fetchPerson(member, committee)
        );
      }
    );

  }

  private _fetchPerson(member: Person, committee: Committee): void {

    this._personFindService
        .find(member.id)
        .subscribe(
          person => {
            committee.members.splice(0, committee.members.length);
            committee.members.push(person);
          }
        );


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
