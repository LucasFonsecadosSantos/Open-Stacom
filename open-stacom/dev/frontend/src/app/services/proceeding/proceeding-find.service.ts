import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Proceeding } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProceedingFindService {

  constructor(
    private http: HttpClient,
  ) { }

  public find(id: string, eventID: string): Observable<Proceeding> {

    return this.http
                .get<Proceeding>(`${environment.API_URL.BASE}${environment.API_URL.PROCEEDING}/${id}`)
                .pipe(
                  map(
                    proceeding => {
                      // this._buildSources([proceeding], eventID);
                      return Proceeding;
                    }
                  )
                );

  }

  public list(eventID: string): Observable<Proceeding[]> {

    return this.http
                .get<Proceeding[]>(`${environment.API_URL.BASE}${environment.API_URL.PROCEEDING}`)
                .pipe(
                  map(
                    result => {
                      let proceedingArray = <any[]>result;
                      // this._buildSources(activityArray, eventID);
                      return proceedingArray;
                      }
                    )
                  );
  }


  // private _buildSources(activityArray: Activity[], eventID: string): Activity[] {

  //   activityArray.forEach(activity => {
  //     activity.picture = this._buildActivityAvatarSource(activity.picture, eventID);
  //   })

  //   return activityArray;

  // }

  // private _buildActivityAvatarSource(avatar: string, eventID: string): string {

  //   return (avatar && (avatar != null) && (avatar.length > 0)) ?
  //           avatar = `/data/${eventID}/img/avatar/${avatar}` :
  //           `/assets/img/default-avatar.png`;
  // }
}
