import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/models';
import { EventUpdateService } from '../event';
import { Event } from './../../models';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ActivityCreateService {

  constructor(
    private _eventUpdateService: EventUpdateService
  ) { }

  public create(activity: Activity, event: Event): Observable<any> {

    return this._eventUpdateService.update(this._addDataToEvent(activity, event));

  }

  private _addDataToEvent(activity: Activity, event: Event): Event {

    activity.id = uuidv4();
    activity.responsible = { 'id': activity.responsible.id };
    activity.pricePlan = { 'id': activity.pricePlan.id };
    event.template
          .objects
          .activity
          .content
          .forEach(
            activity => {

              activity.responsible = { 'id': activity.responsible.id };
              activity.pricePlan = { 'id': activity.pricePlan.id };

            }
          );

    event.template
          .objects
          .activity
          .content
          .push(activity);

    return event;

  }

}
