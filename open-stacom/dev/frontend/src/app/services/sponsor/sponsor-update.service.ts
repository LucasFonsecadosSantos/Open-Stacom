import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sponsor } from 'src/app/models/sponsor.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SponsorUpdateService {

  constructor(
    private _http: HttpClient
  ) { }

  public update(sponsor: Sponsor): Observable<any> {

    return this._http.put(
      `${environment.API_URL.BASE}${environment.API_URL.SPONSOR}`,
      sponsor
    );

  }
}
