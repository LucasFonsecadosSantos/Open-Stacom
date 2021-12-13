import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Activity, Event, Person } from 'src/app/models';
import { environment } from 'src/environments/environment';
import { EventFindService } from '../event';
import { PersonFindService } from '../person';
import { PricePlanFindService } from '../price-plan';

@Injectable({
  providedIn: 'root'
})
export class ActivityFindService {

  constructor(
    private _personFindService: PersonFindService,
    private _pricePlanFindService: PricePlanFindService
  ) { }

  public find(id: string, event: Event): Activity {

    let activity: Activity = this._getByID(id, event.template.objects.activity.content);
    this._findPerson(activity, event);
    this._findPricePlan(activity, event);
    this._buildSources([activity], event);

    return activity;

  }

  private _getByID(id: string, array: Activity[]): Activity {

    return array.find(entity => entity.id == id);

  }

  public list(event: Event): Activity[] {

    let activities: Activity[] = event.template.objects.activity.content;
    this._fetchResponsible(activities, event);
    activities.forEach(activity => this._findPricePlan(activity, event));
    this._buildSources(activities, event);

    return activities;

  }

  private _findPricePlan(activity: Activity, event: Event): void {

    let pricePlanArray = this._pricePlanFindService
                              .find(activity.pricePlan.id, event);

    activity.pricePlan = pricePlanArray ? pricePlanArray : activity.pricePlan;

  }

  private _fetchResponsible(activityArray: Activity[], event: Event): void {

    activityArray.forEach(
      activity => this._findPerson(activity, event)
    );

  }

  private _findPerson(activity: Activity, event: Event): void {

    let person: Person = this._personFindService
                              .find(activity.responsible.id, event);

    activity.responsible = person ? person : activity.responsible;

  }

  private _buildSources(activityArray: Activity[], event: Event): Activity[] {

    activityArray.forEach(activity => {
      activity.picture = this._buildActivityAvatarSource(activity.picture, event);
    })

    return activityArray;

  }

  private _buildActivityAvatarSource(avatar: string, event: Event): string {

    return (avatar && (avatar != null) && (avatar.length > 0)) ?
            avatar = `/data/${event.id}/img/avatar/${avatar}` :
            environment.DEFAULT_AVATAR_PICTURE_PATH;
  }


}
