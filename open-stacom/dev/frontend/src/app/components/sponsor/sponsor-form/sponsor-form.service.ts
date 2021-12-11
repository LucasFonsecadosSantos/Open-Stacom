import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OperationResult } from 'src/app/enums/operation-result';
import { SponsorForm } from 'src/app/models/sponsor-form.model';
import { Sponsor } from 'src/app/models/sponsor.model';

@Injectable({
  providedIn: 'root'
})
export class SponsorFormService {

  private subject:          Subject<any> = new Subject<any>();
  private subjectResponse:  Subject<any> = new Subject<any>();

  public sponsorForm: SponsorForm

  constructor() { }

  public launchModal(sponsorFormModel: SponsorForm) {
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
