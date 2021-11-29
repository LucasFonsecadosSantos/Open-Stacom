import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Committee } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommitteDeleteService {

  constructor(
    private _http: HttpClient
  ) { }

  public delete(committee: Committee): Observable<any> {
    return this._http.delete(
      `${environment.API_URL.BASE}${environment.API_URL.PERSON}/${committee.id}`,
    );
  }

}
