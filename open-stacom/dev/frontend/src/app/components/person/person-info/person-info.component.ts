import { PersonListInfoSharedService } from './../../../services/person/person-list-info-shared.service';
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
    private personListInfoSharedService: PersonListInfoSharedService
  ) { }

  ngOnInit(): void {
    this.person = this.personListInfoSharedService.getPerson();
  }


}
