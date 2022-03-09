import { PersonFormService } from './../person-form/person-form.service';
import { ConfirmDialogService } from './../../dialog/confirm-dialog/confirm-dialog.service';
import { PersonDeleteService } from './../../../services/person/person-delete.service';
import { Component, Input, OnInit } from '@angular/core';
import { Person, Webpage } from 'src/app/models';
import { Operation } from 'src/app/enums';
import { Event } from './../../../models';
import { SharedPersonService } from 'src/app/pages';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {

  @Input()
  public webpage: Webpage;

  person: Person;

  constructor(
    private _sharedPersonService: SharedPersonService,
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
      model: person
    });

  }

  public deletePerson(person: Person): void {

    this.person = person;
    this._confirmDialogService.launchConfirmDialog({
      title: 'Antes de prosseguit..',
      acceptButton: `Remover ${person.name}`,
      cancelButton: `Cancelar`,
      message: `Deseja realmente excluir o registro de ${person.name}`
    });

  }

  private _getResponseObservables(): void {

    this._sharedPersonService.getPersonFromListObservable().subscribe(
      personResponse => {
        this.person = personResponse ? personResponse : null
      }
    );

    this._confirmDialogService.getResponseObservable().subscribe(
        response => {
          if (response) {
            this._personDeleteService.delete(this.person, this.webpage);
          }
        }
    );

  }

}
