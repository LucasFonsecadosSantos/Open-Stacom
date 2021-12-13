import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Committee, Event } from 'src/app/models';
import { EventUpdateService } from '../event';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CommitteCreateService {

  constructor(
    private _eventUpdateService: EventUpdateService
  ) { }

  public create(committee: Committee, event: Event): Observable<any> {

    return this._eventUpdateService
                .update(this._addDataToEvent(committee, event));

  }

  private _addDataToEvent(committee: Committee, event: Event): Event {

    committee.id = uuidv4();
    let members = [];
    committee.members.forEach(member => {
      members.push({'id': member.id});
    });
    committee.members = members;
    console.log(committee);
    event.template
          .objects
          .committee
          .content
          .forEach(
            committee => {

              let members = [];
              committee.members.forEach(member => {
                members.push({'id': member.id});
              });
              committee.members = members;

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
