import { PersonPageService } from './../../../pages/person/person-page.service';
import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {

  person: Person;

  constructor(
    private personPageService: PersonPageService
  ) { }

  ngOnInit(): void {

    this.personPageService
          .getSelectedPerson()
          .subscribe(person => {
            this.person = person;
          });
  }


}
