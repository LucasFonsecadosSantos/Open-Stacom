import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sponsor } from 'src/app/models/sponsor.model';
import { WebpageUpdateService } from '../webpage/webpage-update.service';
import { Webpage } from './../../models';

@Injectable({
  providedIn: 'root'
})
export class SponsorUpdateService {

  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public update(sponsor: Sponsor, webpage: Webpage): Observable<any> {

    return this._webpageUpdateService.update(this._updateDataToWebpage(sponsor, webpage));

  }

  private _updateDataToWebpage(sponsor: Sponsor, webpage: Webpage): Webpage {

    webpage.template.objects.sponsor.content = webpage.template.objects
                  .sponsor
                  .content
                  .filter(
                    fetchedSponsor => fetchedSponsor.id != sponsor.id
                  );
    webpage.template.objects
                .sponsor
                .content
                .push(sponsor);

    return webpage;

  }

}
