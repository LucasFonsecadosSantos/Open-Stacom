import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Webpage } from './../../models';
import { environment } from 'src/environments/environment.prod';
import { catchError } from 'rxjs';
import { WebpageFindService } from '../webpage/webpage-find.service';

@Injectable({
  providedIn: 'root'
})
export class WebpageGenerationService {

  constructor(
    private _http: HttpClient,
    private _webpageFindService: WebpageFindService
  ) { }

  public generatesBuild(webpage: Webpage): void {

    // this._webpageFindService
    //     .find(webpageId)
    //     .subscribe(webpage => this._processWebpageData(webpage));
    this._processWebpageData(webpage);

  }

  private _processWebpageData(webpage: Webpage): void {

    //Modify any webpage data informations
    this._buildRequest(webpage);

  }

  private _buildRequest(webpage: Webpage): void {
    //change request informations as Tokens any another things
    this._sendRequest(webpage);
  }

  private _sendRequest(webpage: Webpage): void {

    this._http
        .post(
          environment.API_URL.GENERATE_BUILD_URL,
          this._getWebpageData(webpage),
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

  private _getWebpageData(webpage: Webpage): string {
    return JSON.stringify(webpage);
  }

}
