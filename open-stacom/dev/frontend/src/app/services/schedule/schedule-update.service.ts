import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Webpage } from 'src/app/models';
import { Schedule } from 'src/app/models/schedule.model';
import { WebpageUpdateService } from '../webpage/webpage-update.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleUpdateService {

  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public update(schedule: Schedule, webpage: Webpage): Observable<any> {

    return this._webpageUpdateService.update(this._updateDataToWebpage(schedule, webpage));

  }

  private _updateDataToWebpage(schedule: Schedule, webpage: Webpage): Webpage {

    webpage.template.objects.schedule.content = webpage.template.objects
                  .schedule
                  .content
                  .filter(
                    fetchedSchedule => fetchedSchedule.id != schedule.id
                  );

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
    webpage.template.objects
                .schedule
                .content
                .push(schedule);


    return webpage;

  }
}
