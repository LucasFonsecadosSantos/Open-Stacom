import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PricePlan } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PricePlanCreateService {

  constructor(
    private _http: HttpClient
  ) { }

  public create(price: PricePlan): Observable<any> {
    return this._http.post(
      `${environment.API_URL.BASE}${environment.API_URL.PRICE_PLAN}`,
      price
    );
  }
}
