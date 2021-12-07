import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Activity } from 'src/app/models';
import { environment } from 'src/environments/environment';
import { EventFindService } from '../event';
import { PersonFindService } from '../person';
import { PricePlanFindService } from '../price-plan';

@Injectable({
  providedIn: 'root'
})
export class ActivityFindService {

  constructor(
    private _eventFindService: EventFindService,
    private _personFindService: PersonFindService,
    private _pricePlanFindService: PricePlanFindService
  ) { }

  public find(id: string, eventID: string): Observable<Activity> {

    return this._eventFindService
        .find(eventID)
        .pipe(
          map(
            result => {
              let fetched: Activity = this._getByID(id, result.template.objects.activity.content);
              this._findPerson(fetched, eventID);
              this._findPricePlan(fetched, eventID);
              this._buildSources([fetched], eventID);
              return fetched;
            }
          )
        );

  }

  private _getByID(id: string, array: Activity[]): Activity {

    return array.find(entity => entity.id == id);

  }

  public list(eventID: string): Observable<Activity[]> {

    return this._eventFindService
        .find(eventID)
        .pipe(
          map(
            result => {
              let fetched: Activity[] = result.template.objects.activity.content;
              this._fetchResponsible(fetched, eventID);
              fetched.forEach(activity => this._findPricePlan(activity, eventID));
              this._buildSources(fetched, eventID);
              return fetched;
            }
          )
        );

  }

  private _findPricePlan(activity: Activity, eventID: string): void {

    this._pricePlanFindService
          .find(activity.pricePlan.id, eventID)
          .subscribe(
            pricePlan => {
              activity.pricePlan = pricePlan ? pricePlan : activity.pricePlan;
            }
          );

  }

  private _fetchResponsible(activityArray: Activity[], eventID: string): void {

    activityArray.forEach(
      activity => this._findPerson(activity, eventID)
    );

  }

  private _findPerson(activity: Activity, eventID: string): void {

    this._personFindService
        .find(activity.responsible.id, eventID)
        .subscribe(
          person => {
            activity.responsible = person ? person : activity.responsible;
          }
        );

  }

  private _buildSources(activityArray: Activity[], eventID: string): Activity[] {

    activityArray.forEach(activity => {
      activity.picture = this._buildActivityAvatarSource(activity.picture, eventID);
    })

    return activityArray;

  }

  private _buildActivityAvatarSource(avatar: string, eventID: string): string {

    return (avatar && (avatar != null) && (avatar.length > 0)) ?
            avatar = `/data/${eventID}/img/avatar/${avatar}` :
            `/assets/img/default-avatar.png`;
  }


}
