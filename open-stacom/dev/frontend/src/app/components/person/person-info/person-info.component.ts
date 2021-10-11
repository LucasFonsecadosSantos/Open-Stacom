import { ActivatedRoute } from '@angular/router';
import { PersonFormService } from './../person-form/person-form.service';
import { ConfirmDialogService } from './../../dialog/confirm-dialog/confirm-dialog.service';
import { UrlService } from './../../../services/utils/url.service';
import { PersonDeleteService } from './../../../services/person/person-delete.service';
import { PersonPageService } from './../../../pages/person/person-page.service';
import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models';
import { Operation } from 'src/app/enums';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {

  person: Person;

  constructor(
    private _personPageService:     PersonPageService,
    private _personFormService:     PersonFormService,
    private _personDeleteService:   PersonDeleteService,
    // private _urlService:            UrlService,
    private _activatedRoute:        ActivatedRoute,
    private _confirmDialogService:  ConfirmDialogService
  ) { }

  ngOnInit(): void {

    this._getResponseObservables();

    this._personPageService

          .getSelectedPerson()

          .subscribe(data => {
            this.person = data;
          });

  }

  public editPerson(person: Person): void {
    this._activatedRoute.paramMap.subscribe(
      params => {
        this._personFormService.launchModal({
          operation:  Operation.Update,
          person:     person,
          eventID:    params.get('eventID')
        });
      }
    );

  }

  public deletePerson(person: Person): void {

    this._confirmDialogService.launchConfirmDialog({
      title: 'Antes de prosseguit..'
    });

    this._activatedRoute.paramMap.subscribe(params => {
      this._personDeleteService.delete(person.id, params.get('eventID'));
    });

  }

  private _getResponseObservables(): void {

    this._personFormService.getResponseObservable()
                              .subscribe(data => {

                                //TODO Here - Implements a toast here

                              });

  }

}
