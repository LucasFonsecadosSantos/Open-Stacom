import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Committee } from 'src/app/models';
import { EventUpdateService } from '../event'
import { Event } from './../../models';

@Injectable({
  providedIn: 'root'
})
export class CommitteUpdateService {

  constructor(
    private _eventUpdateService: EventUpdateService
  ) { }

  public update(committee: Committee, event: Event): Observable<any> {

    return this._eventUpdateService.update(this._updateDataToEvent(committee, event));

  }

  private _updateDataToEvent(committee: Committee, event: Event): Event {

    event.template.objects.committee.content = event.template.objects
                  .committee
                  .content
                  .filter(
                    fetchedSchedule => fetchedSchedule.id != committee.id
                  );

    committee.members.forEach(member => {
      member = {'id': member.id};
    });

    event.template
          .objects
          .committee
          .content
          .forEach(
            committee => {

              committee.members.forEach(member => {
                member = {'id': member.id};
              });

            }
          );

    event.template
         .objects
         .committee
         .content
         .push(committee);

    return event;

  }

}
