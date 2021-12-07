import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PricePlan } from 'src/app/models';
import { environment } from 'src/environments/environment';
import { EventFindService } from '../event';

@Injectable({
  providedIn: 'root'
})
export class PricePlanFindService {

  constructor(private _eventFindService: EventFindService) { }

  public find(id: string, eventID: string): Observable<PricePlan> {

    return this._eventFindService
        .find(eventID)
        .pipe(
          map(
            result => {
              let fetched: PricePlan = this._getByID(id, result.template.objects.pricePlan.content);
              return fetched;
            }
          )
        );

  }

  private _getByID(id: string, array: PricePlan[]): PricePlan {

    return array.find(entity => entity.id == id);

  }

  public list(eventID: string): Observable<PricePlan[]> {

    return this._eventFindService
        .find(eventID)
        .pipe(
          map(
            result => {
              let fetched: PricePlan[] = result.template.objects.pricePlan.content;
              return fetched;
            }
          )
        );

  }

}
