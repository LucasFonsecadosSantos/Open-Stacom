import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PricePlan } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PricePlanUpdateService {

  constructor(
    private _http: HttpClient
  ) { }

  public update(price: PricePlan): Observable<any> {

    return this._http.put(
      `${environment.API_URL.BASE}${environment.API_URL.PRICE_PLAN}`,
      price
    );

  }
}
