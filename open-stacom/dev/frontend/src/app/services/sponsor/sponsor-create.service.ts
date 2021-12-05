import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sponsor } from 'src/app/models/sponsor.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SponsorCreateService {

  constructor(
    private _http: HttpClient
  ) { }

  public create(sponsor: Sponsor): Observable<any> {
    return this._http
                .post(
                  `${environment.API_URL.BASE}${environment.API_URL.SPONSOR}`,
                  sponsor
                );
  }
}
