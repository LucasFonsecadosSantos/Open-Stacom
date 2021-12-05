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

  public find(id: string, eventID: string): Observable<Committee> {

    return this.http
                .get<Committee>(`${environment.API_URL.BASE}${environment.API_URL.COMMITTEE}/${id}`)
                .pipe(
                  map(
                    result => {
                      this._buildSources([result], eventID);
                      return result;
                    }
                  )
                );

  }

  public simpleList(eventID: string): Observable<Committee[]> {

    return this.http
                .get<Committee[]>(`${environment.API_URL.BASE}${environment.API_URL.COMMITTEE}`)
                .pipe(
                  map(
                    result => {
                      let committeeArray = <any[]>result;
                      this._buildSources(committeeArray, eventID);
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
                      this._fetchMembers(committeeArray, eventID);
                      this._buildSources(committeeArray, eventID);
                      return committeeArray;
                    }
                  )
                );

  }

  private _fetchMembers(committeeArray: Committee[], eventID: string): void {

    committeeArray.forEach(
      committee => {
        committee.members.forEach(
          member => this._fetchPerson(member, committee, eventID)
        );
      }
    );

  }

  private _fetchPerson(member: Person, committee: Committee, eventID: string): void {

    this._personFindService
        .find(member.id, eventID)
        .subscribe(
          person => {
            committee.members.splice(0, committee.members.length);
            committee.members.push(person);
          }
        );


  }

  private _buildSources(committeeArray: Committee[], eventID: string): Committee[] {

    committeeArray.forEach(committee => {
      committee.picture = this._buildCommitteeAvatarSource(committee.picture, eventID);
    })

    return committeeArray;

  }

  private _buildCommitteeAvatarSource(committeeAvatar: string, eventID: string): string {

    return (committeeAvatar && (committeeAvatar != null) && (committeeAvatar.length > 0)) ?
            committeeAvatar = `/data/${eventID}/img/avatar/${committeeAvatar}` :
            `/assets/img/default-avatar.png`;

  }

}
