import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Person } from './../../models';
import { environment } from 'src/environments/environment';
import { EventFindService } from '../event';

@Injectable({
  providedIn: 'root'
})
export class PersonFindService {

  constructor(private _eventFindService: EventFindService) { }

  public find(id: string, eventID: string): Observable<Person> {

    return this._eventFindService
        .find(eventID)
        .pipe(
          map(
            result => {
              let fetched: Person = this._getByID(id, result.template.objects.person.content);
              this._buildSources([fetched], eventID);
              return fetched;
            }
          )
        );
  }

  private _getByID(id: string, array: Person[]): Person {

    return array.find(entity => entity.id == id);

  }

  public list(eventID: string): Observable<Person[]> {

    return this._eventFindService
        .find(eventID)
        .pipe(
          map(
            result => {
              let fetched: Person[] = result.template.objects.person.content;
              this._buildSources(fetched, eventID);
              return fetched;
            }
          )
        );

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
