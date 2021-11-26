import { PersonFindService } from './../../../services/person/person-find.service';
import { SharedPersonService } from 'src/app/pages';
import { Component, Input, OnInit} from '@angular/core';
import {
  Event,
  Person,
  Template
} from 'src/app/models';
import { PersonFormService } from '..';
import { Operation } from 'src/app/enums';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  @Input()
  public event: Event;

  @Input()
  public template: Template;

  public personArray: Person[];

  public personSelected: Person;

  constructor(
    private _personFormService: PersonFormService,
    private _personFindService: PersonFindService,
    private _sharedPersonService: SharedPersonService
  ) { }

  ngOnInit(): void {

    this._getEventAndBuildComponent();

  }

  public selectPerson(person: Person): void {
    this._sharedPersonService.sharedPersonFromListToInfo(person);
  }

  public formatBrief(brief: string): string {
    return (brief.length > 0) ? brief.substring(0, 80) + "..." : brief;
  }

  private _getEventAndBuildComponent(): void {

    this._listPeople(this.event.id);

  }

  public editPerson(person: Person): void {

    this._personFormService.launchModal({
      operation: Operation.Update,
      person: person
    });

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
