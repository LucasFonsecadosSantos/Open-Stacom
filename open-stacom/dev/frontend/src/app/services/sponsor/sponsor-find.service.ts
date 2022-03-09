import { Injectable } from '@angular/core';
import { Template, Sponsor, Webpage } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SponsorFindService {


  constructor(

  ) { }

  public find(id: string, webpage: Webpage): Sponsor {

    let sponsor: Sponsor = this._getByID(id, webpage.template.objects.sponsor.content);
    this._buildSources([sponsor], webpage);
    return sponsor;

  }

  private _getByID(id: string, array: Sponsor[]): Sponsor {

    return array.find(sponsor => sponsor.id == id);

  }

  public list(webpage: Webpage): Sponsor[] {

    let sponsorArray: Sponsor[] = webpage.template.objects.sponsor.content;
    this._buildSources(sponsorArray, webpage);
    return sponsorArray;

  }

  private _buildSources(sponsorArray: Sponsor[], webpage: Webpage): Sponsor[] {

    sponsorArray.forEach(sponsor => {
      sponsor.picture = this._buildPersonAvatarSource(sponsor.picture, webpage);
    });

    return sponsorArray;

  }

  private _buildPersonAvatarSource(sponsorAvatar: string, webpage: Webpage): string {

    return (sponsorAvatar && (sponsorAvatar != null) && (sponsorAvatar.length > 0)) ?
            sponsorAvatar = `/data/${webpage.id}/img/avatar/${sponsorAvatar}` :
            environment.DEFAULT_AVATAR_PICTURE_PATH;

  }

}
