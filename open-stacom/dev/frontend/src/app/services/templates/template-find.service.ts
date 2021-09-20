import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemplateFindService {

  constructor(
    private http: HttpClient
  ) { }

  find(eventID: string): Observable<Template> {

    return this.http.get<Template>(`${environment.API_URL.EVENT}${environment.API_URL.EVENT}/${eventID}`);

  }
}
