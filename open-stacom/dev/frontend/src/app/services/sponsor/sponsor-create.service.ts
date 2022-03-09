import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Webpage } from 'src/app/models';
import { Sponsor } from 'src/app/models/sponsor.model';
import { v4 as uuidv4 } from 'uuid';
import { WebpageUpdateService } from '../webpage/webpage-update.service';

@Injectable({
  providedIn: 'root'
})
export class SponsorCreateService {

  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public create(sponsor: Sponsor, webpage: Webpage): Observable<any> {

    return this._webpageUpdateService.update(this._addDataToWebpage(sponsor, webpage));

  }

  private _addDataToWebpage(sponsor: Sponsor, webpage: Webpage): Webpage {

    sponsor.id = uuidv4();
    webpage.template.objects.sponsor.content.push(sponsor);
    return webpage;

  }
}
