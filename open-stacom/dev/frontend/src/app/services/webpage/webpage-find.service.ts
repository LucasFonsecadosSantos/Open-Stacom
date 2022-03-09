import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Webpage } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebpageFindService {

  constructor(
    private http: HttpClient
  ) { }

  public find(webpageID: string): Observable<Webpage> {

    return this.http.get<Webpage>(
      `${environment.API_URL.BASE}${environment.API_URL.WEBPAGE}/${webpageID}`,
      {
        responseType: 'json',
        headers: new HttpHeaders().set('AUTH_TOKEN', `${webpageID}`)
      }
    );

  }

}
