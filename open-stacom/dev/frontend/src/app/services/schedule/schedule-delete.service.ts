import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Webpage } from './../../models';
import { Schedule } from 'src/app/models/schedule.model';
import { WebpageUpdateService } from '../webpage/webpage-update.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleDeleteService {

  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public delete(schedule: Schedule, webpage: Webpage): Observable<any> {

    return this._webpageUpdateService
                .update(this._getWebpage(schedule, webpage));

  }

  public deleteAll(webpage: Webpage): Observable<any> {

    return this._webpageUpdateService
                .update(this._removeAllSchedule(webpage));

  }

  private _removeAllSchedule(webpage: Webpage): Webpage {

    webpage.template.objects.schedule.content = [];
    return webpage;

  }

  private _getWebpage(schedule: Schedule, webpage: Webpage): Webpage {


    webpage.template.objects.schedule.content.forEach(
      fetched => {
        if (fetched.id != schedule.id) {
          fetched = null;
        }
      }
    );

      return webpage;

  }

  private _removeScheduleFromWebpage(schedule: Schedule, webpage: Webpage): Schedule[] {

    return webpage.template.objects.schedule.content.filter(fetched => fetched.id != schedule.id);

  }

}
