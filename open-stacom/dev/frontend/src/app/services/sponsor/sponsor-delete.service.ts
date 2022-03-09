import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Webpage, Sponsor } from 'src/app/models';
import { WebpageUpdateService } from '../webpage/webpage-update.service';

@Injectable({
  providedIn: 'root'
})
export class SponsorDeleteService {

  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public delete(sponsor: Sponsor, webpage: Webpage): Observable<any> {

    return this._webpageUpdateService
                .update(this._getWebpage(sponsor, webpage))

  }

  public deleteAll(webpage: Webpage): Observable<any> {

    return this._webpageUpdateService
                .update(this._removeAllSponsor(webpage))

  }

  private _removeAllSponsor(webpage: Webpage): Webpage {

    webpage.template.objects.sponsor.content = [];
    return webpage;

  }

  private _getWebpage(sponsor: Sponsor, webpage: Webpage): Webpage {


    webpage.template.objects.sponsor.content.forEach(
      fetched => {
        if (fetched.id != sponsor.id) {
          fetched = null;
        }
      }
    );

      return webpage;

  }

  private _removeSponsorFromWebpage(sponsor: Sponsor, webpage: Webpage): Sponsor[] {

    return webpage.template.objects.sponsor.content.filter(fetched => fetched.id != sponsor.id);

  }
}
