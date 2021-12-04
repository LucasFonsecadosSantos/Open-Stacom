import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Activity } from 'src/app/models';
import { environment } from 'src/environments/environment';
import { PersonFindService } from '../person';

@Injectable({
  providedIn: 'root'
})
export class ActivityFindService {

  constructor(
    private http: HttpClient,
    private _personFindService: PersonFindService
  ) { }

  public find(id: string): Observable<Activity> {

    return this.http
                .get<Activity>(`${environment.API_URL.BASE}${environment.API_URL.ACTIVITY}/${id}`)
                .pipe(
                  map(
                    activity => {
                      this._findPerson(activity);
                      //this._buildSources(personArray, eventID);
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
                      this._fetchResponsible(activityArray);
                      //this._buildSources(personArray, eventID);
                      return activityArray;
                      }
                    )
                  );
  }

  private _fetchResponsible(activityArray: Activity[]): void {

    activityArray.forEach(
      activity => this._findPerson(activity)
    );

  }

  private _findPerson(activity: Activity): void {

    this._personFindService
        .find(activity.responsible.id)
        .subscribe(
          person => {
            activity.responsible = person ? person : activity.responsible;
          }
        );

  }

  // private _buildSources(personArray: Activity[], eventID: string): Activity[] {

  //   personArray.forEach(person => {
  //     person.avatar = this._buildPersonAvatarSource(person.avatar, eventID);
  //   })

  //   return personArray;

  // }

  // private _buildPersonAvatarSource(personAvatar: string, eventID: string): string {

  //   return (personAvatar && (personAvatar != null) && (personAvatar.length > 0)) ?
  //           personAvatar = `/data/${eventID}/img/avatar/${personAvatar}` :
  //           `/assets/img/default-avatar.png`;
  // }


}
