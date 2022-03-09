import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PricePlan } from 'src/app/models';
import { WebpageUpdateService } from '../webpage/webpage-update.service';
import { Webpage } from './../../models';

@Injectable({
  providedIn: 'root'
})
export class PricePlanUpdateService {

  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public update(pricePlan: PricePlan, webpage: Webpage): Observable<any> {

    return this._webpageUpdateService.update(this._updateDataToWebpage(pricePlan, webpage));

  }

  private _updateDataToWebpage(pricePlan: PricePlan, webpage: Webpage): Webpage {

    webpage.template
          .objects
          .pricePlan
          .content = webpage.template
                  .objects
                  .pricePlan
                  .content
                  .filter(
                    fetchedSchedule => fetchedSchedule.id != pricePlan.id
                  );

    webpage.template
          .objects
          .pricePlan
          .content
          .push(pricePlan);

    return webpage;
  }

}
