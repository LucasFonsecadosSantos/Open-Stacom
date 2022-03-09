import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Webpage, Proceeding } from 'src/app/models';
import { v4 as uuidv4 } from 'uuid';
import { WebpageUpdateService } from '../webpage/webpage-update.service';

@Injectable({
  providedIn: 'root'
})
export class ProceedingCreateService {

  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public create(proceeding: Proceeding, webpage: Webpage): Observable<any> {

    return this._webpageUpdateService.update(this._addDataToWebpage(proceeding, webpage));

  }

  private _addDataToWebpage(proceeding: Proceeding, webpage: Webpage): Webpage {

    proceeding.id = uuidv4();

    webpage.template
          .objects
          .proceeding
          .content
          .push(proceeding);

    return webpage;

  }
}
