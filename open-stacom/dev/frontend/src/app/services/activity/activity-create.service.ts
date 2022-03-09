import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity, Webpage } from 'src/app/models';
import { Event } from './../../models';
import { v4 as uuidv4 } from 'uuid';
import { WebpageUpdateService } from '../webpage/webpage-update.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityCreateService {

  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public create(activity: Activity, webpage: Webpage): Observable<any> {

    return this._webpageUpdateService.update(this._addDataToEvent(activity, webpage));

  }

  private _addDataToEvent(activity: Activity, webpage: Webpage): Webpage {

    activity.id = uuidv4();
    activity.responsible = { 'id': activity.responsible.id };
    activity.pricePlan = { 'id': activity.pricePlan.id };
    webpage.template
          .objects
          .activity
          .content
          .forEach(
            activity => {

              activity.responsible = { 'id': activity.responsible.id };
              activity.pricePlan = { 'id': activity.pricePlan.id };

            }
          );

    webpage.template
          .objects
          .activity
          .content
          .push(activity);

    return webpage;

  }

}
