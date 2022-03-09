import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Activity, Webpage, Person } from 'src/app/models';
import { environment } from 'src/environments/environment';
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

  public find(id: string, webpage: Webpage): Activity {

    let activity: Activity = this._getByID(id, webpage.template.objects.activity.content);
    this._findPerson(activity, webpage);
    this._findPricePlan(activity, webpage);
    this._buildSources([activity], webpage);

    return activity;

  }

  private _getByID(id: string, array: Activity[]): Activity {

    return array.find(entity => entity.id == id);

  }

  public list(webpage: Webpage): Activity[] {

    let activities: Activity[] = webpage.template.objects.activity.content;
    this._fetchResponsible(activities, webpage);
    activities.forEach(activity => this._findPricePlan(activity, webpage));
    this._buildSources(activities, webpage);

    return activities;

  }

  private _findPricePlan(activity: Activity, webpage: Webpage): void {

    let pricePlanArray = this._pricePlanFindService
                              .find(activity.pricePlan.id, webpage);

    activity.pricePlan = pricePlanArray ? pricePlanArray : activity.pricePlan;

  }

  private _fetchResponsible(activityArray: Activity[], webpage: Webpage): void {

    activityArray.forEach(
      activity => this._findPerson(activity, webpage)
    );

  }

  private _findPerson(activity: Activity, webpage: Webpage): void {

    let person: Person = this._personFindService
                              .find(activity.responsible.id, webpage);

    activity.responsible = person ? person : {id: activity.responsible.id};

  }

  private _buildSources(activityArray: Activity[], webpage: Webpage): Activity[] {

    activityArray.forEach(activity => {
      activity.picture = this._buildActivityAvatarSource(activity.picture, webpage);
    })

    return activityArray;

  }

  private _buildActivityAvatarSource(avatar: string, webpage: Webpage): string {

    return (avatar && (avatar != null) && (avatar.length > 0)) ?
            avatar = `/data/${webpage.id}/img/avatar/${avatar}` :
            environment.DEFAULT_AVATAR_PICTURE_PATH;
  }


}
