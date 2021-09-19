import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventCreateService {

  constructor(
    private http: HttpClient
  ) { }

  create(): Observable<Event> {
    return this.http.post<Event>(`${environment.API_MOCK_URL.BASE}/${environment.API_URL.EVENT}`);
  }
}
