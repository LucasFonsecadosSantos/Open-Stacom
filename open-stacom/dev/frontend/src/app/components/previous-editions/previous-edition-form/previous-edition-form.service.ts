import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PreviousEdition, FormModel } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class PreviousEditionFormService {

  private subject:          Subject<any> = new Subject<any>();
  private subjectResponse:  Subject<any> = new Subject<any>();

  public formModel: FormModel;

  constructor() { }

  public submitEdition(model: FormModel) {
    this.subject.next(model);
  }

  public submitOperation(edition: PreviousEdition): void {
    this.subjectResponse.next(true);
  }

  public getObservable(): Observable<any> {
    return this.subject.asObservable();
  }

  public getResponseObservable(): Observable<any> {
    return this.subjectResponse.asObservable();
  }

}
