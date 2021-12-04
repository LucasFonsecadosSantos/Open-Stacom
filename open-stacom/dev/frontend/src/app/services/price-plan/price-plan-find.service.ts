import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PricePlan } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PricePlanFindService {

  constructor(private http: HttpClient) { }

  public find(id: string): Observable<PricePlan> {

    return this.http
                .get<PricePlan>(`${environment.API_URL.BASE}${environment.API_URL.PRICE_PLAN}/${id}`);

  }

  public list(eventID: string): Observable<PricePlan[]> {
    return this.http
                .get<PricePlan[]>(`${environment.API_URL.BASE}${environment.API_URL.PRICE_PLAN}`)
                .pipe(
                  map(
                    result => {
                      const personArray = <any[]>result;
                      //this._buildSources(personArray, eventID);
                      return personArray;
                  }));
  }

}
