import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Proceeding, FormModel } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class ProceedingFormService {

  private subject:          Subject<any> = new Subject<any>();
  private subjectResponse:  Subject<any> = new Subject<any>();

  public model: FormModel

  constructor() { }

  public launchModal(model: FormModel) {
    this.subject.next(model);
  }

  public submitOperation(proceeding: Proceeding): void {
    this.subjectResponse.next(true);
  }

  public getObservable(): Observable<any> {
    return this.subject.asObservable();
  }

  public getResponseObservable(): Observable<any> {
    return this.subjectResponse.asObservable();
  }
}
