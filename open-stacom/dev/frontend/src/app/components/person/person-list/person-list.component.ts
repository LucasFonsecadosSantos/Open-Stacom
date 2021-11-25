import { PersonFindService } from './../../../services/person/person-find.service';
import { Component, Input, OnInit} from '@angular/core';
import {
  Event,
  Person,
  Template
} from 'src/app/models';
import { SharedEventService } from 'src/app/services/shared';
import { SharedPersonService } from 'src/app/pages';

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
    this._sharedPersonService.sharedPersonFromListToInfo(person);
  }

  private _getEventAndBuildComponent(): void {

    this._listPeople(this._sharedEventService.getEvent().id);

  }

  private _listPeople(eventID): void {

    this._personFindService.list(eventID).subscribe(
      response => {
        this.personArray = response;
        this._sharedPersonService.sharedPersonFromListToInfo(response[0] ? response[0] : null);
      }
    );

  }

}
