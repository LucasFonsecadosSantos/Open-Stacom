import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PreviousEdition, Webpage } from 'src/app/models';
import { v4 as uuidv4 } from 'uuid';
import { WebpageUpdateService } from '../webpage/webpage-update.service';

@Injectable({
  providedIn: 'root'
})
export class PreviousEditionCreateService {

  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public create(edition: PreviousEdition, webpage: Webpage): Observable<PreviousEdition> {

    return this._webpageUpdateService.update(this._addDataToWebpage(edition, webpage));

  }

  private _addDataToWebpage(edition: PreviousEdition, webpage: Webpage): Webpage {

    edition.id = uuidv4();

    webpage.template
          .objects
          .pastEdition
          .content
          .push(edition);

    return webpage;

  }


}
