import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PricePlan, Event } from 'src/app/models';
import { EventUpdateService } from '../event';

@Injectable({
  providedIn: 'root'
})
export class PricePlanDeleteService {

  constructor(
    private _eventUpdateService: EventUpdateService
  ) { }

  public delete(pricePlan: PricePlan, event: Event): Observable<any> {

    return this._eventUpdateService
                .update(this._getEvent(pricePlan, event))

  }

  public deleteAll(event: Event): Observable<any> {
    return this._eventUpdateService
                .update(this._removeAllSchedule(event));
  }

  private _removeAllSchedule(event: Event): Event {

    event.template.objects.pricePlan.content = [];
    return event;

  }

  private _getEvent(pricePlan: PricePlan, event: Event): Event {


    event.template.objects.pricePlan.content.forEach(
      fetched => {
        if (fetched.id != pricePlan.id) {
          fetched = null;
        }
      }
    );

      return event;

  }
}
