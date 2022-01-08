import { Injectable } from '@angular/core';
import { Schedule } from 'src/app/models/schedule.model';
import { Event } from './../../models';

@Injectable({
  providedIn: 'root'
})
export class ScheduleFindService {

  constructor(

  ) { }

  public find(id: string, event: Event): Schedule {

    let schedule = this._getByID(id, event.template.objects.schedule.content);
    this._fetchActivity([schedule], event);
    return schedule;

  }

  private _getByID(id: string, array: Schedule[]): Schedule {

    return array.find(entity => entity.id == id);

  }

  public list(event: Event): Schedule[] {

    let scheduleArray: Schedule[] = event.template.objects.schedule.content;
    this._fetchActivity(scheduleArray, event);
    return scheduleArray;

  }

  private _fetchActivity(scheduleArray: Schedule[], event: Event): void {

    scheduleArray.forEach(

      schedule => {

        schedule.activity = event.template
              .objects
              .activity
              .content
              .filter(
                fetched => fetched.id == schedule.activity.id
              )[0];

        schedule.activity
                .responsible = event.template
                                    .objects
                                    .person
                                    .content
                                    .filter(
                                      person => person.id == schedule.activity.responsible.id
                                    )[0];


      }
    );

  }
}
