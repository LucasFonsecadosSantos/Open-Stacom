import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Proceeding, Event, Template } from 'src/app/models';
import { EventFindService } from '../event';

@Injectable({
  providedIn: 'root'
})
export class ProceedingFindService {

  constructor(
    private _eventFindService: EventFindService
  ) { }

  public find(id: string, event: Event): Proceeding {

    let proceeding: Proceeding = this._getByID(id, event.template.objects.proceeding.content);
    // this._buildSources([proceeding], event);

    return proceeding;

  }

  private _getByID(id: string, array: Proceeding[]): Proceeding {

    return array.find(entity => entity.id == id);

  }

  public list(event: Event): Proceeding[] {

    return event.template.objects.proceeding.content;

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
