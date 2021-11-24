import { PersonFindService } from './../../../services/person/person-find.service';
import { Component, Input, OnInit} from '@angular/core';
import {
  Event,
  Person,
  Template
} from 'src/app/models';
import { SharedEventService, SharedPersonService } from 'src/app/services/shared';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  public personArray: Person[];
  public personSelected: Person;

  constructor(
    private _personFindService: PersonFindService,
    private _sharedEventService: SharedEventService,
    private _sharedPersonService: SharedPersonService
  ) { }

  ngOnInit(): void {

    this._getEventAndBuildComponent();

  }

  public selectPerson(person: Person): void {
    this._sharedPersonService.setPerson(person);
  }

  private _getEventAndBuildComponent(): void {

    this._sharedEventService.getEventObservable().subscribe(

      event => this._listPeople(event.id)

    );

  }

  private _listPeople(eventID): void {

    this._personFindService.list(eventID).subscribe(
      response => {
        this.personArray = response;
        this._sharedPersonService.setPerson(response[0] ? response[0] : null);
      }
    );

  }

}
