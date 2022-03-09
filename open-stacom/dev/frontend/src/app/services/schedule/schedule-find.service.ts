import { Injectable } from '@angular/core';
import { Schedule } from 'src/app/models/schedule.model';
import { Webpage } from './../../models';

@Injectable({
  providedIn: 'root'
})
export class ScheduleFindService {

  constructor(

  ) { }

  public find(id: string, webpage: Webpage): Schedule {

    let schedule = this._getByID(id, webpage.template.objects.schedule.content);
    this._fetchActivity([schedule], webpage);
    return schedule;

  }

  private _getByID(id: string, array: Schedule[]): Schedule {

    return array.find(entity => entity.id == id);

  }

  public list(webpage: Webpage): Schedule[] {

    let scheduleArray: Schedule[] = webpage.template.objects.schedule.content;
    this._fetchActivity(scheduleArray, webpage);
    return scheduleArray;

  }

  private _fetchActivity(scheduleArray: Schedule[], webpage: Webpage): void {

    scheduleArray.forEach(

      schedule => {

        schedule.activity = webpage.template
              .objects
              .activity
              .content
              .filter(
                fetched => fetched.id == schedule.activity.id
              )[0];

        schedule.activity
                .responsible = webpage.template
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
