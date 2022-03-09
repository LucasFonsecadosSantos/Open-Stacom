import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proceeding, Webpage, Template } from 'src/app/models';
import { WebpageUpdateService } from '../webpage/webpage-update.service';

@Injectable({
  providedIn: 'root'
})
export class ProceedingUpdateService {

  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public update(proceeding: Proceeding, webpage: Webpage): Observable<any> {

    return this._webpageUpdateService.update(this._updateDataToWebpage(proceeding, webpage));

  }

  private _updateDataToWebpage(proceeding: Proceeding, webpage: Webpage): Webpage {

    webpage.template
          .objects
          .proceeding
          .content = webpage.template.objects
                          .proceeding
                          .content
                          .filter(
                            fetchedSchedule => fetchedSchedule.id != proceeding.id
                          );


    webpage.template
         .objects
         .proceeding
         .content
         .push(proceeding);

    return webpage;

  }
}
