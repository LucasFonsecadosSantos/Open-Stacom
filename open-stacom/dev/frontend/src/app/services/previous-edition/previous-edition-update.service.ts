import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PreviousEdition } from 'src/app/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreviousEditionUpdateService {

  constructor(
    private _http: HttpClient
  ) { }

  public update(edition: PreviousEdition): Observable<PreviousEdition> {

    return this._http.put<PreviousEdition>(
      `${environment.API_URL.BASE}${environment.API_URL.PAST_EDITIONS}`,
      edition
    );

  }
}
