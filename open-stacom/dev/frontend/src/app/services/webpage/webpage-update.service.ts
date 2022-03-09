import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { Webpage } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebpageUpdateService {

  constructor(private _http: HttpClient) { }

  public update(webpage: Webpage): Observable<any> {

    return this._http
                .put(
                  `${environment.API_URL.BASE}${environment.API_URL.WEBPAGE}/${webpage.id}`,
                  webpage,
                  {
                    responseType: 'json',
                    headers: new HttpHeaders().set('AUTH_TOKEN', `${webpage.id}`)
                  }
                )
                .pipe(
                  retry(environment.API_CONNECTIONS_RETRY),
                  catchError(this._handleError)
                );

  }

  private _handleError(error): any {

    let errorMessage = '';
        // if (error.error instanceof ErrorWebpage) {
        //     // client-side error
        //     errorMessage = `Error: ${error.error.message}`;
        // } else {
        //     // server-side error
        //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        // }
        return new Error(errorMessage);

  }

}
