import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PricePlan, Webpage } from 'src/app/models';
import { WebpageUpdateService } from '../webpage/webpage-update.service';

@Injectable({
  providedIn: 'root'
})
export class PricePlanDeleteService {

  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public delete(pricePlan: PricePlan, webpage: Webpage): Observable<any> {

    return this._webpageUpdateService
                .update(this._getWebpage(pricePlan, webpage))

  }

  public deleteAll(webpage: Webpage): Observable<any> {
    return this._webpageUpdateService
                .update(this._removeAllSchedule(webpage));
  }

  private _removeAllSchedule(webpage: Webpage): Webpage {

    webpage.template.objects.pricePlan.content = [];
    return webpage;

  }

  private _getWebpage(pricePlan: PricePlan, webpage: Webpage): Webpage {


    webpage.template.objects.pricePlan.content.forEach(
      fetched => {
        if (fetched.id != pricePlan.id) {
          fetched = null;
        }
      }
    );

      return webpage;

  }
}
