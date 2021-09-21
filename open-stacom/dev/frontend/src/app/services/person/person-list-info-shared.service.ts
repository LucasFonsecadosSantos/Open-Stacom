import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Person } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class PersonListInfoSharedService {

  private subject: Subject<Person> = new Subject<Person>();

  constructor() {

  }

  updatePersonSelected(person: Person) {
    this.subject.next(person);
  }

  getSelectedPerson(): Observable<any> {
    return this.subject.asObservable();
  }


}
