import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity, Event } from 'src/app/models';
import { EventUpdateService } from '../event';

@Injectable({
  providedIn: 'root'
})
export class ActivityDeleteService {

  constructor(
    private _eventUpdateService: EventUpdateService
  ) { }

  public delete(activity: Activity, event: Event): Observable<any> {

    return this._eventUpdateService
                .update(this._getEvent(activity, event));

  }

  public deleteAll(event: Event): Observable<any> {

    return this._eventUpdateService
                .update(this._removeAllActivity(event));

  }

  private _removeAllActivity(event: Event): Event {

    event.template.objects.activity.content = [];
    return event;

  }

  private _getEvent(activity: Activity, event: Event): Event {


    event.template.objects.activity.content.forEach(
      fetched => {
        if (fetched.id != activity.id) {
          fetched = null;
        }
      }
    );

      return event;

  }

  private _removeActivityFromEvent(activity: Activity, event: Event): Activity[] {

    return event.template.objects.activity.content.filter(fetched => fetched.id != activity.id);

  }

}
