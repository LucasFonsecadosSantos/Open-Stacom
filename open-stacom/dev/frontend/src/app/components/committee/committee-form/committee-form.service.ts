import { Injectable } from '@angular/core';
import {
  Observable,
  Subject
} from 'rxjs';
import {
  Committee,
  FormModel
} from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class CommitteeFormService {

  private subject:          Subject<any> = new Subject<any>();
  private subjectResponse:  Subject<any> = new Subject<any>();

  public personForm: FormModel;

  constructor() { }

  public launchModal(committeFormModel: FormModel) {
    this.subject.next(committeFormModel);
  }

  public submitOperation(committee: Committee): void {
    this.subjectResponse.next(true);
  }

  public getObservable(): Observable<any> {
    return this.subject.asObservable();
  }

  public getResponseObservable(): Observable<any> {
    return this.subjectResponse.asObservable();
  }

}
