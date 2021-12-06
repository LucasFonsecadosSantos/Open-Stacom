import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proceeding } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProceedingUpdateService {

  constructor(
    private _http: HttpClient
  ) { }

  public update(proceeding: Proceeding): Observable<any> {

    return this._http.put(
      `${environment.API_URL.BASE}${environment.API_URL.PROCEEDING}`,
      proceeding
    );

  }
}
