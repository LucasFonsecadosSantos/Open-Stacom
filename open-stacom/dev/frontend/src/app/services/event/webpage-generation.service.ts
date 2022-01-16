import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from './../../models';
import { EventFindService } from '.';
import { environment } from 'src/environments/environment.prod';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebpageGenerationService {

  constructor(
    private _http: HttpClient,
    private _eventFindService: EventFindService
  ) { }

  public generatesBuild(event: Event): void {

    // this._eventFindService
    //     .find(eventId)
    //     .subscribe(event => this._processEventData(event));
    this._processEventData(event);

  }

  private _processEventData(event: Event): void {

    //Modify any event data informations
    this._buildRequest(event);

  }

  private _buildRequest(event: Event): void {
    //change request informations as Tokens any another things
    this._sendRequest(event);
  }

  private _sendRequest(event: Event): void {

    this._http
        .post(
          environment.API_URL.GENERATE_BUILD_URL,
          this._getEventData(event),
          this._getRequestOptions()
        )
        .pipe(
          catchError(
            exception => {
              console.log(exception);
              throw exception;
            }
          )
        )
        .subscribe({
          next: response => {

          }
        });

  }

  private _getRequestOptions(): any {
    return {
      headers: {'content-type': 'application/json'},
      reportProgress: true,
      observe: 'response',
      responseType: 'json',

    };
  }

  private _getEventData(event: Event): string {
    return JSON.stringify(event);
  }

}
