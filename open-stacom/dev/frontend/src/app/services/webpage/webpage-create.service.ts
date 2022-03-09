import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Template, Webpage } from 'src/app/models';
import { environment } from 'src/environments/environment';

import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class WebpageCreateService {

  constructor(private http: HttpClient) { }

  public createWebpage(webpage: Webpage): Observable<Webpage> {

    const token = uuidv4();
    webpage.id = token;
    webpage.version = '1.0 SNAPSHOT';
    webpage.token = token;

    return this.http.post<Webpage>(
      `${environment.API_URL.BASE}${environment.API_URL.WEBPAGE}`,
      webpage,
      {
        reportProgress: true,
        responseType: 'json',
      }
    );
  }

  public create(template: Template): Observable<any> {

    const token = uuidv4();
    let webpage: Webpage = new Webpage();
    webpage.id = token;
    webpage.version = '1.0 SNAPSHOT';
    webpage.token = token;
    template.engine = 'thymeleaf';
    webpage.template = template;

    return this.http.post(
      `${environment.API_URL.BASE}${environment.API_URL.WEBPAGE}`,
      webpage,
      {
        reportProgress: true,
        responseType: 'text'
        // headers: new HttpHeaders(
        //   {"Access-Control-Allow-Origin": "*"}
        // )
      }
    );
  }

}
