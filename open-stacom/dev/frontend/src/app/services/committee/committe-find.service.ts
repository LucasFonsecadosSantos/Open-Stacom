import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EventFindService } from '../event';
import { PersonFindService } from '../person';

import {
  Committee, Person
} from './../../models';

@Injectable({
  providedIn: 'root'
})
export class CommitteFindService {

  constructor(
    private _eventFindService: EventFindService,
    private _personFindService: PersonFindService
  ) { }

  public find(id: string, eventID: string): Observable<Committee> {

    return this._eventFindService
        .find(eventID)
        .pipe(
          map(
            result => {
              let fetched: Committee = this._getByID(id, result.template.objects.schedule.content);
              this._buildSources([fetched], eventID);
              return fetched;
            }
          )
        );

  }

  public simpleList(eventID: string): Observable<Committee[]> {

    return this._eventFindService
        .find(eventID)
        .pipe(
          map(
            result => {
              let fetched: Committee[] = result.template.objects.committee.content;
              this._buildSources(fetched, eventID);
              return fetched;
            }
          )
        );

  }

  private _getByID(id: string, array: Committee[]): Committee {

    return array.find(entity => entity.id == id);

  }


  public list(eventID: string): Observable<Committee[]> {

    return this._eventFindService
        .find(eventID)
        .pipe(
          map(
            result => {
              let fetched: Committee[] = result.template.objects.committee.content;
              this._fetchMembers(fetched, eventID);
              this._buildSources(fetched, eventID);
              return fetched;
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
