import { UrlService } from './../../../services/utils/url.service';
import { PersonDeleteService } from './../../../services/person/person-delete.service';
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
    private _personPageService:   PersonPageService,
    private _personDeleteService: PersonDeleteService,
    private _urlService:          UrlService
  ) { }

  ngOnInit(): void {

    this._personPageService

          .getSelectedPerson()

          .subscribe(person => {
            this.person = person;
          });

  }

  public editPerson(person: Person): void {}

  public deletePerson(person: Person): void {


    this._personDeleteService.delete(person.id, this._urlService.getEventIDFromRoute());

  }


}
