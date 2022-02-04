import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OperationResult } from 'src/app/enums/operation-result';
import { FormModel } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class SponsorFormService {

  private subject:          Subject<any> = new Subject<any>();
  private subjectResponse:  Subject<any> = new Subject<any>();

  public sponsorForm: FormModel

  constructor() { }

  public launchModal(sponsorFormModel: FormModel) {
    this.subject.next(sponsorFormModel);
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
