import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PricePlan, Event } from 'src/app/models';
import { EventUpdateService } from '../event';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class PricePlanCreateService {

  constructor(
    private _eventUpdateService: EventUpdateService
  ) { }

  public create(pricePlan: PricePlan, event: Event): Observable<any> {

    return this._eventUpdateService.update(this._addDataToEvent(pricePlan, event));

  }

  private _addDataToEvent(pricePlan: PricePlan, event: Event): Event {

    pricePlan.id = uuidv4();
    event.template.objects.pricePlan.content.push(pricePlan);
    return event;

  }
}
