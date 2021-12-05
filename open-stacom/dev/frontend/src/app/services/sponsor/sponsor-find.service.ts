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

  public find(id: string, eventID: string): Observable<Sponsor> {

    return this.http
                .get<Sponsor>(`${environment.API_URL.BASE}${environment.API_URL.SPONSOR}/${id}`)
                .pipe(
                  map(
                    sponsor => {
                      this._buildSources([sponsor], eventID);
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
                      this._buildSources(sponsorArray, eventID);
                      return sponsorArray;
                      }
                    )
                  );
  }

  private _buildSources(sponsorArray: Sponsor[], eventID: string): Sponsor[] {

    sponsorArray.forEach(sponsor => {
      sponsor.picture = this._buildPersonAvatarSource(sponsor.picture, eventID);
    })

    return sponsorArray;

  }

  private _buildPersonAvatarSource(sponsorAvatar: string, eventID: string): string {

    return (sponsorAvatar && (sponsorAvatar != null) && (sponsorAvatar.length > 0)) ?
            sponsorAvatar = `/data/${eventID}/img/avatar/${sponsorAvatar}` :
            `/assets/img/default-avatar.png`;

  }

}
