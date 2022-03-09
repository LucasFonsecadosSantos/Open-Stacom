import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Webpage } from './../../models';
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

  public find(id: string, webpage: Webpage): Committee {

    let committee: Committee = this._getByID(id, webpage.template.objects.schedule.content);
    this._buildSources([committee], webpage);
    this._fetchMembers([committee], webpage);

    return committee;

  }

  private _getByID(id: string, array: Committee[]): Committee {

    return array.find(entity => entity.id == id);

  }


  public list(webpage: Webpage): Committee[] {

    let committee: Committee[] = webpage.template.objects.committee.content;
    this._fetchMembers(committee, webpage);
    this._buildSources(committee, webpage);

    return committee;

  }

  private _fetchMembers(committeeArray: Committee[], webpage: Webpage): void {

    committeeArray.forEach(
      committee => {
        committee.members.forEach(
          member => this._fetchPerson(member, committee, webpage)
        );
      }
    );

  }

  private _fetchPerson(member: Person, committee: Committee, webpage: Webpage): void {

    let members: Person = this._personFindService
                                .find(member.id, webpage)

    committee.members.push(members);

  }

  private _buildSources(committeeArray: Committee[], webpage: Webpage): Committee[] {

    committeeArray.forEach(committee => {
      committee.picture = this._buildCommitteeAvatarSource(committee.picture, webpage);
    })

    return committeeArray;

  }

  private _buildCommitteeAvatarSource(committeeAvatar: string, webpage: Webpage): string {

    return (committeeAvatar && (committeeAvatar != null) && (committeeAvatar.length > 0)) ?
            committeeAvatar = `/data/${webpage.id}/img/avatar/${committeeAvatar}` :
            environment.DEFAULT_AVATAR_PICTURE_PATH;

  }

}
