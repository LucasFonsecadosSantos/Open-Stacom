import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event, Sponsor } from 'src/app/models';
import { environment } from 'src/environments/environment';
import { EventUpdateService } from '../event';

@Injectable({
  providedIn: 'root'
})
export class SponsorDeleteService {

  constructor(
    private _eventUpdateService: EventUpdateService
  ) { }

  public delete(sponsor: Sponsor, event: Event): Observable<any> {

    return this._eventUpdateService
                .update(this._getEvent(sponsor, event))

  }

  public deleteAll(event: Event): Observable<any> {

    return this._eventUpdateService
                .update(this._removeAllSponsor(event))

  }

  private _removeAllSponsor(event: Event): Event {

    event.template.objects.sponsor.content = [];
    return event;

  }

  private _getEvent(sponsor: Sponsor, event: Event): Event {


    event.template.objects.sponsor.content.forEach(
      fetched => {
        if (fetched.id != sponsor.id) {
          fetched = null;
        }
      }
    );

      return event;

  }

  private _removeSponsorFromEvent(sponsor: Sponsor, event: Event): Sponsor[] {
    console.log(sponsor);
    return event.template.objects.sponsor.content.filter(fetched => fetched.id != sponsor.id);

  }
}
