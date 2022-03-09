import { Injectable } from '@angular/core';
import { Webpage, PreviousEdition } from 'src/app/models';
import { Observable } from 'rxjs';
import { WebpageUpdateService } from '../webpage/webpage-update.service';

@Injectable({
  providedIn: 'root'
})
export class PreviousEditionUpdateService {

  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public update(edition: PreviousEdition, webpage: Webpage): Observable<PreviousEdition> {

    return this._webpageUpdateService.update(this._updateDataToWebpage(edition, webpage));

  }

  private _updateDataToWebpage(edition: PreviousEdition, webpage: Webpage): Webpage {

    webpage.template
          .objects
          .pastEdition
          .content = webpage.template
                          .objects
                          .pastEdition
                          .content
                          .filter(
                            fetchedSchedule => fetchedSchedule.id != edition.id
                          );

    webpage.template
         .objects
         .pastEdition
         .content
         .push(edition);

    return webpage;

  }

}
