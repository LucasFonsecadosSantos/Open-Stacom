import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { PreviousEdition } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreviousEditionFindService {

  constructor(
    private http: HttpClient
  ) { }

  public list(eventID: string): Observable<PreviousEdition[]> {

    return this.http
                  .get<PreviousEdition[]>(
                    `${environment.API_URL.BASE}${environment.API_URL.PAST_EDITIONS}`
                  )
                      .pipe(map(result => {
                          const editionsArray = <any[]>result;
                          this._buildSources(editionsArray, eventID);
                          return editionsArray;
                      }));

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
            `/assets/img/default-avatar.png`;

  }


}
