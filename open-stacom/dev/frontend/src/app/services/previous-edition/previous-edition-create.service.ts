import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PreviousEdition } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreviousEditionCreateService {

  constructor(
    private _http: HttpClient
  ) { }

  public create(edition: PreviousEdition): Observable<PreviousEdition> {

    return this._http.post<PreviousEdition>(
      `${environment.API_URL.BASE}${environment.API_URL.PAST_EDITIONS}`,
      edition
    );

  }
}
