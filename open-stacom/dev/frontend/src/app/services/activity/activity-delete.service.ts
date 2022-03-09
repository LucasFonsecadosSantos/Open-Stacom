import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity, Webpage } from 'src/app/models';
import { WebpageUpdateService } from '../webpage/webpage-update.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityDeleteService {

  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public delete(activity: Activity, webpage: Webpage): Observable<any> {

    return this._webpageUpdateService
                .update(this._getWebpage(activity, webpage));

  }

  public deleteAll(webpage: Webpage): Observable<any> {

    return this._webpageUpdateService
                .update(this._removeAllActivity(webpage));

  }

  private _removeAllActivity(webpage: Webpage): Webpage {

    webpage.template.objects.activity.content = [];
    return webpage;

  }

  private _getWebpage(activity: Activity, webpage: Webpage): Webpage {


    webpage.template.objects.activity.content.forEach(
      fetched => {
        if (fetched.id != activity.id) {
          fetched = null;
        }
      }
    );

      return webpage;

  }

  private _removeActivityFromWebpage(activity: Activity, webpage: Webpage): Activity[] {

    return webpage.template.objects.activity.content.filter(fetched => fetched.id != activity.id);

  }

}
