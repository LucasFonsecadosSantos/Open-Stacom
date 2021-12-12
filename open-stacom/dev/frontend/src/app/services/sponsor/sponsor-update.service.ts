import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sponsor } from 'src/app/models/sponsor.model';
import { EventUpdateService } from '../event';
import { Event } from './../../models';

@Injectable({
  providedIn: 'root'
})
export class SponsorUpdateService {

  constructor(
    private _eventUpdateService: EventUpdateService
  ) { }

  public update(sponsor: Sponsor, event: Event): Observable<any> {

    return this._eventUpdateService.update(this._updateDataToEvent(sponsor, event));

  }

  private _updateDataToEvent(sponsor: Sponsor, event: Event): Event {

    event.template.objects.sponsor.content = event.template.objects
                  .sponsor
                  .content
                  .filter(
                    fetchedSponsor => fetchedSponsor.id != sponsor.id
                  );
    event.template.objects
                .sponsor
                .content
                .push(sponsor);

    return event;

  }

}
