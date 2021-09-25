import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Person } from './../../models';

@Injectable({
  providedIn: 'root'
})
export class PersonPageService {

  private subject: Subject<Person> = new Subject<Person>();

  constructor() { }


  updatePersonSelected(person: Person) {
    this.subject.next(person);
  }

  getSelectedPerson(): Observable<any> {
    return this.subject.asObservable();
  }
}
