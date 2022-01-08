import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Event } from './../../models';

@Injectable({
  providedIn: 'root'
})
export class EventUpdateService {

  constructor(
    private _http: HttpClient
  ) { }

  public update(event: Event): Observable<any> {

    return this._http
                .put<any>(
                  `${environment.API_URL.BASE}${environment.API_URL.EVENT}/${event.id}`,
                  event
                )
                .pipe(
                  retry(environment.API_CONNECTIONS_RETRY),
                  catchError(this._handleError)
                );

  }

  private _handleError(error): any {

    let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return new Error(errorMessage);

  }
}
