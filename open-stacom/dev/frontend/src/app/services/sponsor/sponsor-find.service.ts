import { Injectable } from '@angular/core';
import { Template, Sponsor, Event } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SponsorFindService {


  constructor(

  ) { }

  public find(id: string, event: Event): Sponsor {

    let sponsor: Sponsor = this._getByID(id, event.template.objects.sponsor.content);
    this._buildSources([sponsor], event);
    return sponsor;

  }

  private _getByID(id: string, array: Sponsor[]): Sponsor {

    return array.find(sponsor => sponsor.id == id);

  }

  public list(event: Event): Sponsor[] {

    let sponsorArray: Sponsor[] = event.template.objects.sponsor.content;
    this._buildSources(sponsorArray, event);
    return sponsorArray;

  }

  private _buildSources(sponsorArray: Sponsor[], event: Event): Sponsor[] {

    sponsorArray.forEach(sponsor => {
      sponsor.picture = this._buildPersonAvatarSource(sponsor.picture, event);
    });

    return sponsorArray;

  }

  private _buildPersonAvatarSource(sponsorAvatar: string, event: Event): string {

    return (sponsorAvatar && (sponsorAvatar != null) && (sponsorAvatar.length > 0)) ?
            sponsorAvatar = `/data/${event.id}/img/avatar/${sponsorAvatar}` :
            environment.DEFAULT_AVATAR_PICTURE_PATH;

  }

}
