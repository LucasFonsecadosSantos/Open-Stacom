import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Proceeding } from 'src/app/models';
import { environment } from 'src/environments/environment';
import { EventFindService } from '../event';

@Injectable({
  providedIn: 'root'
})
export class ProceedingFindService {

  constructor(
    private _eventFindService: EventFindService
  ) { }

  public find(id: string, eventID: string): Observable<Proceeding> {

    return this._eventFindService
        .find(eventID)
        .pipe(
          map(
            result => {
              let fetched: Proceeding = this._getByID(id, result.template.objects.proceeding.content);
              // this._buildSources([proceeding], eventID);
              return fetched;
            }
          )
        );

  }

  private _getByID(id: string, array: Proceeding[]): Proceeding {

    return array.find(entity => entity.id == id);

  }

  public list(eventID: string): Observable<Proceeding[]> {

    return this._eventFindService
        .find(eventID)
        .pipe(
          map(
            result => {
              let fetched: Proceeding[] = result.template.objects.proceeding.content;
              // this._buildSources([proceeding], eventID);
              return fetched;
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
