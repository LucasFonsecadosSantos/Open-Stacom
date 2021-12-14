import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person, Event } from 'src/app/models';
import { EventUpdateService } from '../event';

@Injectable({
  providedIn: 'root'
})
export class PersonUpdateService {

  constructor(
    private _eventUpdateService: EventUpdateService
  ) { }

  public update(person: Person, event: Event): Observable<any> {

    return this._eventUpdateService.update(this._updateDataToEvent(person, event));

  }

  private _updateDataToEvent(person: Person, event: Event): Event {

    event.template.objects.person.content = event.template.objects
                  .person
                  .content
                  .filter(
                    fetchedSchedule => fetchedSchedule.id != person.id
                  );


    event.template
         .objects
         .person
         .content
         .push(person);

    return event;

  }

}
