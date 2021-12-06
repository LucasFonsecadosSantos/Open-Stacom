import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proceeding } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProceedingCreateService {

  constructor(
    private _http: HttpClient
  ) { }

  public create(proceeding: Proceeding): Observable<any> {
    return this._http.post(
      `${environment.API_URL.BASE}${environment.API_URL.PROCEEDING}`,
      proceeding
    );
  }
}
