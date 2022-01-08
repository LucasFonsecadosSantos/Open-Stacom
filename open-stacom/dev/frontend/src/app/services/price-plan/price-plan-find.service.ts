import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Event, PricePlan } from 'src/app/models';
import { environment } from 'src/environments/environment';
import { EventFindService } from '../event';

@Injectable({
  providedIn: 'root'
})
export class PricePlanFindService {

  constructor() { }

  public find(id: string, event: Event): PricePlan {

    return this._getByID(id, event.template.objects.pricePlan.content);

  }

  private _getByID(id: string, array: PricePlan[]): PricePlan {

    return array.find(entity => entity.id == id);

  }

  public list(event: Event): PricePlan[] {

    return event.template.objects.pricePlan.content;

  }

}
