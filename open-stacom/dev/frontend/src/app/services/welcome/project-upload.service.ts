import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectUploadService {

  apiUrl: string = 'localhost';

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {

    return this.http.request(this._getRequestObject(this._getFormData(file)));

  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.apiUrl}/projetos`);
  }

  private _getFormData(file: File): FormData {

    const formData: FormData = new FormData();
    formData.append('file', file);
    return formData;

  }

  private _getRequestObject(formData: FormData): HttpRequest<any> {

    return new HttpRequest(
      'POST',
      `${environment.API_URL}/upload-project`,
      formData,
      {
        reportProgress: true,
        responseType: 'json'
      }
    );

  }

}
