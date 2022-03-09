import { Injectable } from '@angular/core';
import { Webpage, PricePlan } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class PricePlanFindService {

  constructor() { }

  public find(id: string, webpage: Webpage): PricePlan {

    return this._getByID(id, webpage.template.objects.pricePlan.content);

  }

  private _getByID(id: string, array: PricePlan[]): PricePlan {

    return array.find(entity => entity.id == id);

  }

  public list(webpage: Webpage): PricePlan[] {

    return webpage.template.objects.pricePlan.content;

  }

}
