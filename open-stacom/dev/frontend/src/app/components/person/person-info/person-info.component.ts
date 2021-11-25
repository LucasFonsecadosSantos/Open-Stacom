import { ActivatedRoute } from '@angular/router';
import { PersonFormService } from './../person-form/person-form.service';
import { ConfirmDialogService } from './../../dialog/confirm-dialog/confirm-dialog.service';
import { PersonDeleteService } from './../../../services/person/person-delete.service';
import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models';
import { Operation } from 'src/app/enums';
import {
  SharedEventService
} from 'src/app/services/shared';
import { SharedPersonService } from 'src/app/pages';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {

  person: Person;

  constructor(
    private _sharedPersonService: SharedPersonService,
    private _sharedEventService: SharedEventService,
    private _personFormService: PersonFormService,
    private _personDeleteService: PersonDeleteService,
    private _confirmDialogService: ConfirmDialogService
  ) { }

  ngOnInit(): void {

    this._getResponseObservables();

  }

  public editPerson(person: Person): void {

    this._personFormService.launchModal({
      operation:  Operation.Update,
      person: person
    });

  }

  public deletePerson(person: Person): void {

    this._confirmDialogService.launchConfirmDialog({
      title: 'Antes de prosseguit..'
    });

    this._sharedEventService.getEventObservable().subscribe(
      eventResponse => this._personDeleteService.delete(person.id, eventResponse.id)

    );


  }

  private _getResponseObservables(): void {

    this._sharedPersonService.getPersonFromListObservable().subscribe(
      personResponse => {
        {this.person = personResponse ? personResponse : null; console.log(personResponse);}
      }
    );

  }

}
