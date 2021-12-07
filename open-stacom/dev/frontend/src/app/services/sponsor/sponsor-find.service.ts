import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Template, Sponsor, Event } from 'src/app/models';
import { environment } from 'src/environments/environment';
import { EventFindService } from '../event';

@Injectable({
  providedIn: 'root'
})
export class SponsorFindService {


  constructor(
    private _eventFindService: EventFindService
  ) { }

  public find(id: string, eventID: string): Observable<Sponsor> {

    return this._eventFindService
        .find(eventID)
        .pipe(
          map(
            result => {
              let sponsor: Sponsor = this._getByID(id, result.template.objects.sponsor.content);
              this._buildSources([sponsor], eventID);
              return sponsor;
            }
          )
        );

  }

  private _getByID(id: string, array: Sponsor[]): Sponsor {

    return array.find(sponsor => sponsor.id == id);

  }

  public list(eventID: string): Observable<Sponsor[]> {

    return this._eventFindService
                .find(eventID)
                .pipe(
                  map(
                    result => {
                      let sponsor: Sponsor[] = result.template.objects.sponsor.content;
                      this._buildSources(sponsor, eventID);
                      return sponsor;
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
