import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity, Webpage } from 'src/app/models';
import { WebpageUpdateService } from '../webpage/webpage-update.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityUpdateService {

  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public update(activity: Activity, webpage: Webpage): Observable<any> {

    return this._webpageUpdateService.update(this._updateDataToWebpage(activity, webpage));

  }

  private _updateDataToWebpage(activity: Activity, webpage: Webpage): Webpage {

    webpage.template.objects.activity.content = webpage.template.objects
                  .activity
                  .content
                  .filter(
                    fetchedSchedule => fetchedSchedule.id != activity.id
                  );

    activity.responsible = {'id': activity.responsible.id };
    activity.pricePlan = {'id': activity.pricePlan.id };
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
