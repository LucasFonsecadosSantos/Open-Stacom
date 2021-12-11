import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/app/models';
import { Sponsor } from 'src/app/models/sponsor.model';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';
import { EventFindService, EventUpdateService } from '../event';

@Injectable({
  providedIn: 'root'
})
export class SponsorCreateService {

  constructor(
    private _eventUpdateService: EventUpdateService
  ) { }

  public create(sponsor: Sponsor, event: Event): Observable<any> {

    return this._eventUpdateService.update(this._addDataToEvent(sponsor, event));

  }

  private _addDataToEvent(sponsor: Sponsor, event: Event): Event {

    sponsor.id = uuidv4();
    event.template.objects.sponsor.content.push(sponsor);
    return event;

  }
}
