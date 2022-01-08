import { Injectable } from '@angular/core';
import { PreviousEdition, Event } from 'src/app/models';
import { environment } from 'src/environments/environment';
import { EventFindService } from '../event';

@Injectable({
  providedIn: 'root'
})
export class PreviousEditionFindService {

  constructor(
    private _eventFindService: EventFindService
  ) { }

  public list(event: Event): PreviousEdition[] {

    let edition: PreviousEdition[] = event.template.objects.pastEdition.content;
    this._buildSources(edition, event);

    return edition;

  }

  private _getByID(id: string, array: PreviousEdition[]): PreviousEdition {

    return array.find(entity => entity.id == id);

  }

  private _buildSources(editionsArray: PreviousEdition[], event: Event): PreviousEdition[] {

    editionsArray.forEach(edition => {
      edition.logo = this._buildEditionAvatarSource(edition.logo, event.id);
    })

    return editionsArray;

  }

  private _buildEditionAvatarSource(editionAvatar: string, eventID: string): string {

    return (editionAvatar && (editionAvatar != null) && (editionAvatar.length > 0)) ?
            editionAvatar = `/data/${eventID}/img/avatar/${editionAvatar}` :
            environment.DEFAULT_AVATAR_PICTURE_PATH;

  }


}
