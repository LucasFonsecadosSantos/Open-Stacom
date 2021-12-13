import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Committee, Event } from 'src/app/models';
import { EventUpdateService } from '../event';

@Injectable({
  providedIn: 'root'
})
export class CommitteDeleteService {

  constructor(
    private _eventUpdateService: EventUpdateService
  ) { }

  public delete(committee: Committee, event: Event): Observable<any> {

    return this._eventUpdateService
                .update(this._getEvent(committee, event));

  }

  public deleteAll(event: Event): Observable<any> {

    return this._eventUpdateService
                .update(this._removeAllActivity(event));

  }

  private _removeAllActivity(event: Event): Event {

    event.template.objects.committee.content = [];
    return event;

  }

  private _getEvent(committee: Committee, event: Event): Event {


    event.template.objects.committee.content.forEach(
      fetched => {
        if (fetched.id != committee.id) {
          fetched = null;
        }
      }
    );

      return event;

  }

  private _removeActivityFromEvent(committee: Committee, event: Event): Committee[] {

    return event.template.objects.committee.content.filter(fetched => fetched.id != committee.id);

  }

}
