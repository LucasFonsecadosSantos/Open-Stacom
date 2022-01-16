import { Injectable } from '@angular/core';
import {
  Observable,
  Subject
} from 'rxjs';
import {
  Person,
  FormModel
} from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class PersonFormService {

  private subject:          Subject<any> = new Subject<any>();
  private subjectResponse:  Subject<any> = new Subject<any>();

  public personForm: FormModel

  constructor() { }

  public launchModal(personFormModel: FormModel) {
    this.subject.next(personFormModel);
  }

  public submitOperation(person: Person): void {
    this.subjectResponse.next(true);
  }

  public getObservable(): Observable<any> {
    return this.subject.asObservable();
  }

  public getResponseObservable(): Observable<any> {
    return this.subjectResponse.asObservable();
  }

}
