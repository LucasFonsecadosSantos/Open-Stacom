import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Webpage } from 'src/app/models';
import { Schedule } from 'src/app/models/schedule.model';
import { v4 as uuidv4 } from 'uuid';
import { WebpageUpdateService } from '../webpage/webpage-update.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleCreateService {

  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public create(schedule: Schedule, webpage: Webpage): Observable<any> {

    return this._webpageUpdateService.update(this._addDataToWebpage(schedule, webpage));

  }

  private _addDataToWebpage(schedule: Schedule, webpage: Webpage): Webpage {

    schedule.id = uuidv4();
    schedule.activity = {'id': schedule.activity.id};
    webpage.template
          .objects
          .schedule
          .content
          .forEach(
            schedule =>
              schedule.activity = {'id': schedule.activity.id}
            );

    webpage.template
            .objects
            .activity
            .content
            .forEach(
              activity =>
                activity.responsible = {'id': activity.responsible.id}
              );

    webpage.template
          .objects
          .schedule
          .content
          .push(schedule);

    return webpage;

  }
}
