import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Committee } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommitteCreateService {

  constructor(
    private _http: HttpClient
  ) { }

  public create(committee: Committee): Observable<any> {
    return this._http.post(
      `${environment.API_URL.BASE}${environment.API_URL.COMMITTEE}`,
      committee
    );
  }

}
