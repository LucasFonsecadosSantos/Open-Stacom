import { Injectable } from '@angular/core';
import { Person, Event } from './../../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonFindService {

  constructor() { }

  public find(id: string, event: Event): Person {

    let person: Person = this._getByID(id, event.template.objects.person.content);
    this._buildSources([person], event);

    return person;
  }

  private _getByID(id: string, array: Person[]): Person {

    return array.find(entity => entity.id == id);

  }

  public list(event: Event): Person[] {

    let person: Person[] = event.template.objects.person.content;
    this._buildSources(person, event);

    return person;

  }

  private _buildSources(personArray: Person[], event: Event): Person[] {

    personArray.forEach(person => {
      person.avatar = this._buildPersonAvatarSource(person.avatar, event);
    })

    return personArray;

  }

  private _buildPersonAvatarSource(personAvatar: string, event: Event): string {

    return (personAvatar && (personAvatar != null) && (personAvatar.length > 0)) ?
            personAvatar = `/data/${event.id}/img/avatar/${personAvatar}` :
            environment.DEFAULT_AVATAR_PICTURE_PATH;

  }

}
