import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OperationResult } from 'src/app/enums';
import { FormModel } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class PriceFormService {

  private subject:          Subject<any> = new Subject<any>();
  private subjectResponse:  Subject<any> = new Subject<any>();

  public pricePlanForm: FormModel

  constructor() { }

  public launchModal(pricePlanForm: FormModel) {
    this.subject.next(pricePlanForm);
  }

  public submitOperation(operationResult: OperationResult): void {
    this.subjectResponse.next(operationResult);
  }

  public getObservable(): Observable<any> {
    return this.subject.asObservable();
  }

  public getResponseObservable(): Observable<any> {
    return this.subjectResponse.asObservable();
  }
}
