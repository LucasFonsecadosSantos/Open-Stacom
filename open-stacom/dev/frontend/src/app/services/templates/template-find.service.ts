import { Injectable } from '@angular/core';
import { Template } from './../../models';
import { EventFindService } from '../event';
import { Event } from 'src/app/models/event.model';

@Injectable({
  providedIn: 'root'
})
export class TemplateFindService {

  constructor(
    private _eventFindService: EventFindService
  ) { }

  public find(event: Event): Template {

    return event.template;

    // return this._eventFindService
    //     .find(eventID)
    //     .pipe(
    //       map(
    //         result => {
    //           return result.template
    //         }
    //       )
    //     );

  }
}
