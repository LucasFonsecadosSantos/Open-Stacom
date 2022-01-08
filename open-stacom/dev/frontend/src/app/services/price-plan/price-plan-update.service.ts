import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PricePlan } from 'src/app/models';
import { environment } from 'src/environments/environment';
import { EventUpdateService } from '../event';
import { Event } from './../../models';

@Injectable({
  providedIn: 'root'
})
export class PricePlanUpdateService {

  constructor(
    private _eventUpdateService: EventUpdateService
  ) { }

  public update(pricePlan: PricePlan, event: Event): Observable<any> {

    return this._eventUpdateService.update(this._updateDataToEvent(pricePlan, event));

  }

  private _updateDataToEvent(pricePlan: PricePlan, event: Event): Event {

    event.template
          .objects
          .pricePlan
          .content = event.template
                  .objects
                  .pricePlan
                  .content
                  .filter(
                    fetchedSchedule => fetchedSchedule.id != pricePlan.id
                  );

    event.template
          .objects
          .pricePlan
          .content
          .push(pricePlan);

    return event;
  }

}
