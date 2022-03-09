import { Injectable } from '@angular/core';
import { Proceeding, Webpage, Template } from 'src/app/models';
@Injectable({
  providedIn: 'root'
})
export class ProceedingFindService {

  constructor(
  ) { }

  public find(id: string, webpage: Webpage): Proceeding {

    let proceeding: Proceeding = this._getByID(id, webpage.template.objects.proceeding.content);
    // this._buildSources([proceeding], webpage);

    return proceeding;

  }

  private _getByID(id: string, array: Proceeding[]): Proceeding {

    return array.find(entity => entity.id == id);

  }

  public list(webpage: Webpage): Proceeding[] {

    return webpage.template.objects.proceeding.content;

  }


  // private _buildSources(activityArray: Activity[], webpageID: string): Activity[] {

  //   activityArray.forEach(activity => {
  //     activity.picture = this._buildActivityAvatarSource(activity.picture, webpageID);
  //   })

  //   return activityArray;

  // }

  // private _buildActivityAvatarSource(avatar: string, webpageID: string): string {

  //   return (avatar && (avatar != null) && (avatar.length > 0)) ?
  //           avatar = `/data/${webpageID}/img/avatar/${avatar}` :
  //           `/assets/img/default-avatar.png`;
  // }
}
