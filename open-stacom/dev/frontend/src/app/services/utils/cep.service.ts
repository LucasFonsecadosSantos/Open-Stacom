import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  public fetchInformationFromCEP(cep: string): any {

    let tokens = this._parseCepToGetNumbers(cep);

    if (tokens !== '') {
      if (this._cepValidatorRegex().test(tokens)) {
        return this.http.get(`//viacep.com.br/ws/${cep}/json`);
      }
    }

    return of({});

  }

  private _cepValidatorRegex(): any {
    return /^[0-9]{8}$/;
  }

  private _parseCepToGetNumbers(cep: string): string {
    return cep.replace(/\D/g, '');
  }
}
