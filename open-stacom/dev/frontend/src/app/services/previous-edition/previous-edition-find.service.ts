import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { PreviousEdition } from 'src/app/models';
import { environment } from 'src/environments/environment';
import { EventFindService } from '../event';

@Injectable({
  providedIn: 'root'
})
export class PreviousEditionFindService {

  constructor(
    private _eventFindService: EventFindService
  ) { }

  public list(eventID: string): Observable<PreviousEdition[]> {

    return this._eventFindService
        .find(eventID)
        .pipe(
          map(
            result => {
              let fetched: PreviousEdition[] = result.template.objects.pastEdition.content;
              this._buildSources(fetched, eventID);
              return fetched;
            }
          )
        );

  }

  private _getByID(id: string, array: PreviousEdition[]): PreviousEdition {

    return array.find(entity => entity.id == id);

  }

  private _buildSources(editionsArray: PreviousEdition[], eventID: string): PreviousEdition[] {

    editionsArray.forEach(edition => {
      edition.logo = this._buildEditionAvatarSource(edition.logo, eventID);
    })

    return editionsArray;

  }

  private _buildEditionAvatarSource(editionAvatar: string, eventID: string): string {

    return (editionAvatar && (editionAvatar != null) && (editionAvatar.length > 0)) ?
            editionAvatar = `/data/${eventID}/img/avatar/${editionAvatar}` :
            environment.DEFAULT_AVATAR_PICTURE_PATH;

  }


}
