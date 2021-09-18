import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Template } from './../../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemplatesRetrievingService {

  constructor(private http: HttpClient) { }

  retrieving(): Observable<any> {

    return this.http.get<Template[]>(`${environment.API_URL.BASE}${environment.API_URL.TEMPLATES}`);

  }
}
