import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Committee } from 'src/app/models';
import { WebpageUpdateService } from '../webpage/webpage-update.service';
import { Webpage } from './../../models';

@Injectable({
  providedIn: 'root'
})
export class CommitteUpdateService {

  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public update(committee: Committee, webpage: Webpage): Observable<any> {

    return this._webpageUpdateService.update(this._updateDataToWebpage(committee, webpage));

  }

  private _updateDataToWebpage(committee: Committee, webpage: Webpage): Webpage {

      webpage.template.objects.committee.content = webpage.template.objects
      .committee
      .content
      .filter(
        fetchedSchedule => fetchedSchedule.id != committee.id
      );

      webpage.template
            .objects
            .committee
            .content
            .push(committee);


      webpage.template
            .objects
            .committee
            .content
            .forEach(instance => {

              instance.members = instance.members.filter(obj =>
                Object.keys(obj).length == 1
              );

            });
      return webpage;

  }

}
