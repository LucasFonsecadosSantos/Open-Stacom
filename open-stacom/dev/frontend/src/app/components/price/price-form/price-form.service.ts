import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PricePlanForm } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class PriceFormService {

  private subject:          Subject<any> = new Subject<any>();
  private subjectResponse:  Subject<any> = new Subject<any>();

  public pricePlanForm: PricePlanForm

  constructor() { }

  public launchModal(pricePlanForm: PricePlanForm) {
    this.subject.next(pricePlanForm);
  }

  public submitOperation(pricePlanForm: PricePlanForm): void {
    this.subjectResponse.next(true);
  }

  public getObservable(): Observable<any> {
    return this.subject.asObservable();
  }

  public getResponseObservable(): Observable<any> {
    return this.subjectResponse.asObservable();
  }
}
