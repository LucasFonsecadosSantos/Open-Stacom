import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Template } from './../../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemplateFindService {

  constructor(
    private http: HttpClient
  ) { }

  find(templateID: string): Observable<Template> {

    return this.http.get<Template>(
      `${environment.API_URL.BASE}${environment.API_URL.TEMPLATES}/${templateID}`,
      {
        responseType: 'json'
      }
    );

  }
}
