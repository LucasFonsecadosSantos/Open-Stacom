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
    console.log(committee.members);
    let membersArray = [];

    committee.members.forEach(member => {
      member = {'id': member.id};
    });

    console.log(committee.members);


          event.template
          .objects
          .committee
          .content
          .push(committee);


    event.template
          .objects
          .committee
          .content
          .forEach(instance => {


            instance.members = instance.members.filter(obj =>
              Object.keys(obj).length == 1
            );
          });
    return event;

  }

}
