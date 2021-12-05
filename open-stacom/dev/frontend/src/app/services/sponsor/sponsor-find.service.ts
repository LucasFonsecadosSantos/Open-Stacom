import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Sponsor } from 'src/app/models/sponsor.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SponsorFindService {


  constructor(
    private http: HttpClient,
  ) { }

  public find(id: string): Observable<Sponsor> {

    return this.http
                .get<Sponsor>(`${environment.API_URL.BASE}${environment.API_URL.SPONSOR}/${id}`)
                .pipe(
                  map(
                    sponsor => {
                      //this._buildSources(personArray, eventID);
                      return sponsor;
                    }
                  )
                );

  }

  public list(eventID: string): Observable<Sponsor[]> {

    return this.http
                .get<Sponsor[]>(`${environment.API_URL.BASE}${environment.API_URL.SPONSOR}`)
                .pipe(
                  map(
                    result => {
                      let sponsorArray = <any[]>result;
                      //this._buildSources(personArray, eventID);
                      return sponsorArray;
                      }
                    )
                  );
  }

}
