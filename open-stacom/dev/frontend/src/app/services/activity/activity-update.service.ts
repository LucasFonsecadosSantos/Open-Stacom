import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity, Event } from 'src/app/models';
import { environment } from 'src/environments/environment';
import { EventUpdateService } from '../event';

@Injectable({
  providedIn: 'root'
})
export class ActivityUpdateService {

  constructor(
    private _eventUpdateService: EventUpdateService
  ) { }

  public update(activity: Activity, event: Event): Observable<any> {

    return this._eventUpdateService.update(this._updateDataToEvent(activity, event));

  }

  private _updateDataToEvent(activity: Activity, event: Event): Event {

    event.template.objects.activity.content = event.template.objects
                  .activity
                  .content
                  .filter(
                    fetchedSchedule => fetchedSchedule.id != activity.id
                  );

    activity.responsible = {'id': activity.responsible.id };
    activity.pricePlan = {'id': activity.pricePlan.id };

    event.template.objects
                .activity
                .content
                .push(activity);

    return event;

  }

}
