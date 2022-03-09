import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Event, Template, Webpage } from './../../models';
import { v4 as uuidv4 } from 'uuid';
import { WebpageUpdateService } from '../webpage/webpage-update.service';

@Injectable({
  providedIn: 'root'
})
export class EventCreateService {

  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public create(event: Event, webpage: Webpage): Observable<Event> {

    event.id = uuidv4();

    return this._webpageUpdateService.update(this._addDataToWebpage(event, webpage));

  }

  private _addDataToWebpage(event: Event, webpage: Webpage): Webpage {

    webpage.template.objects.event.content = event;

    return webpage;

  }

}
