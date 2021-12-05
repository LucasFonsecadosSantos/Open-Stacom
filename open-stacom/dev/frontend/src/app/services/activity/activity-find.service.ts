import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Activity } from 'src/app/models';
import { environment } from 'src/environments/environment';
import { PersonFindService } from '../person';
import { PricePlanFindService } from '../price-plan';

@Injectable({
  providedIn: 'root'
})
export class ActivityFindService {

  constructor(
    private http: HttpClient,
    private _personFindService: PersonFindService,
    private _pricePlanFindService: PricePlanFindService
  ) { }

  public find(id: string, eventID: string): Observable<Activity> {

    return this.http
                .get<Activity>(`${environment.API_URL.BASE}${environment.API_URL.ACTIVITY}/${id}`)
                .pipe(
                  map(
                    activity => {
                      this._findPerson(activity, eventID);
                      this._findPricePlan(activity);
                      this._buildSources([activity], eventID);
                      return activity;
                    }
                  )
                );

  }

  public list(eventID: string): Observable<Activity[]> {

    return this.http
                .get<Activity[]>(`${environment.API_URL.BASE}${environment.API_URL.ACTIVITY}`)
                .pipe(
                  map(
                    result => {
                      let activityArray = <any[]>result;
                      this._fetchResponsible(activityArray, eventID);
                      activityArray.forEach(activity => this._findPricePlan);
                      this._buildSources(activityArray, eventID);
                      return activityArray;
                      }
                    )
                  );
  }

  private _findPricePlan(activity: Activity): void {

    this._pricePlanFindService
          .find(activity.pricePlan.id)
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
