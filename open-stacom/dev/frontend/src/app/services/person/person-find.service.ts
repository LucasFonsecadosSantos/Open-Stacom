import { Injectable } from '@angular/core';
import { Person, Webpage } from './../../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonFindService {

  constructor() { }

  public find(id: string, webpage: Webpage): Person {

    let person: Person = this._getByID(id, webpage.template.objects.person.content);
    this._buildSources([person], webpage);

    return person;
  }

  private _getByID(id: string, array: Person[]): Person {

    return array.find(entity => entity.id == id);

  }

  public list(webpage: Webpage): Person[] {

    let person: Person[] = webpage.template.objects.person.content;
    this._buildSources(person, webpage);

    return person;

  }

  private _buildSources(personArray: Person[], webpage: Webpage): Person[] {

    personArray.forEach(person => {
      person.avatar = this._buildPersonAvatarSource(person.avatar, webpage);
    })

    return personArray;

  }

  private _buildPersonAvatarSource(personAvatar: string, webpage: Webpage): string {

    return (personAvatar && (personAvatar != null) && (personAvatar.length > 0)) ?
            personAvatar = `/data/${webpage.id}/img/avatar/${personAvatar}` :
            environment.DEFAULT_AVATAR_PICTURE_PATH;

  }

}
