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
                          const personArray = <any[]>result;
                          //this._buildSources(personArray, eventID);
                          return personArray;
                      }));

  }


}
