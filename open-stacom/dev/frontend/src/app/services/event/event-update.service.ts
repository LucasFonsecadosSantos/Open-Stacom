import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { WebpageUpdateService } from '../webpage/webpage-update.service';
import { Event, Webpage } from './../../models';

@Injectable({
  providedIn: 'root'
})
export class EventUpdateService {

  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public update(event: Event, webpage: Webpage): Observable<Event> {

    return this._webpageUpdateService.update(this._addDataToWebpage(event, webpage));

  }

  private _addDataToWebpage(event: Event, webpage: Webpage): Webpage {

    webpage.template.objects.event.content = event;

    return webpage;

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
        return new Error(errorMessage);

  }

}
