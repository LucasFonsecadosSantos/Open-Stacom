import { Injectable } from '@angular/core';
import { Person } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class PersonListInfoSharedService {

  person: Person = undefined;

  constructor() {

  }

  updatePersonSelected(person: Person) {
    this.person = person;
    console.log(person);
  }

  getPerson(): Person { return this.person; }

}
