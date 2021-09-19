import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Template } from './../../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemplatesRetrievingService {

  TEMPLATES_PATH = "/templates";

  constructor(private http: HttpClient) { }

  retrieving(): Observable<any> {

    return this.http.get<Template[]>(`${environment.API_URL.BASE}${environment.API_URL.TEMPLATES}`);

  }

  static buildSources(templates: Template[]): Template[] {

    for (let template of templates ) {
      template = TemplatesRetrievingService._processTemplate(template);
    }

    return templates;

  }

  private static _processTemplate(template: Template): Template {

    // template["path"] = `../../mocks${template["path"]}`;
    // template["mockup"] = `../../mocks${template["path"]}/settings/${template["id"]}.png`;

    return template;
  }
}
