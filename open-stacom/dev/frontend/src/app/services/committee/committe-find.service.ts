import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Event } from './../../models';
import { PersonFindService } from '../person';

import {
  Committee, Person
} from './../../models';

@Injectable({
  providedIn: 'root'
})
export class CommitteFindService {

  constructor(
    private _personFindService: PersonFindService
  ) { }

  public find(id: string, event: Event): Committee {

    let committee: Committee = this._getByID(id, event.template.objects.schedule.content);
    this._buildSources([committee], event);
    this._fetchMembers([committee], event);

    return committee;

  }

  private _getByID(id: string, array: Committee[]): Committee {

    return array.find(entity => entity.id == id);

  }


  public list(event: Event): Committee[] {

    let committee: Committee[] = event.template.objects.committee.content;
    this._fetchMembers(committee, event);
    this._buildSources(committee, event);

    return committee;

  }

  private _fetchMembers(committeeArray: Committee[], event: Event): void {

    committeeArray.forEach(
      committee => {
        committee.members.forEach(
          member => this._fetchPerson(member, committee, event)
        );
      }
    );

  }

  private _fetchPerson(member: Person, committee: Committee, event: Event): void {

    let members: Person = this._personFindService
                                .find(member.id, event)

    committee.members.splice(0, committee.members.length);
    committee.members.push(members);

  }

  private _buildSources(committeeArray: Committee[], event: Event): Committee[] {

    committeeArray.forEach(committee => {
      committee.picture = this._buildCommitteeAvatarSource(committee.picture, event);
    })

    return committeeArray;

  }

  private _buildCommitteeAvatarSource(committeeAvatar: string, event: Event): string {

    return (committeeAvatar && (committeeAvatar != null) && (committeeAvatar.length > 0)) ?
            committeeAvatar = `/data/${event.id}/img/avatar/${committeeAvatar}` :
            environment.DEFAULT_AVATAR_PICTURE_PATH;

  }

}
