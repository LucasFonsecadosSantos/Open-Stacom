import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventCloseService {

  constructor(private _http: HttpClient) { }

  public closeEvent(eventId: string): void {

    this._http.post(
      `${environment.API_URL.BASE}${environment.API_URL.CLOSE_EVENT}/${eventId}`,
      {}
    );

  }

}
