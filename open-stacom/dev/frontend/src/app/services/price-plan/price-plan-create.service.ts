import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PricePlan, Webpage } from 'src/app/models';
import { v4 as uuidv4 } from 'uuid';
import { WebpageUpdateService } from '../webpage/webpage-update.service';

@Injectable({
  providedIn: 'root'
})
export class PricePlanCreateService {

  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public create(pricePlan: PricePlan, webpage: Webpage): Observable<any> {

    return this._webpageUpdateService.update(this._addDataToWebpage(pricePlan, webpage));

  }

  private _addDataToWebpage(pricePlan: PricePlan, webpage: Webpage): Webpage {

    pricePlan.id = uuidv4();
    webpage.template.objects.pricePlan.content.push(pricePlan);
    return webpage;

  }
}
