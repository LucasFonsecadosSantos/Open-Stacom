import { PersonFormService } from './../../components/person/person-form/person-form.service';
import { ConfirmDialogService } from './../../components/dialog/confirm-dialog/confirm-dialog.service';
import { UrlService } from './../../services/utils/url.service';
import { PersonDeleteService } from './../../services/person/person-delete.service';
import { ExcelExportService } from './../../services/utils/excel-export.service';
import { PersonListComponent } from './../../components/person/person-list/person-list.component';
import { PersonPageService } from './person-page.service';


import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from 'src/app/models';
import { Operation } from 'src/app/enums';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @ViewChild(PersonListComponent)
  private personListComponent: PersonListComponent;

  private _personArray: Person[];

  closeResult: string;

  constructor(
    private _exportExcelService:    ExcelExportService,
    private _personFormService:     PersonFormService,
    private _personDeleteService:   PersonDeleteService,
    private _urlService:            UrlService,
    private _confirmDialogService:  ConfirmDialogService
  ) { }

  ngOnInit(): void {

    this._getResponseObservables();

  }

  public openAddPersonForm(personToAdd: Person): void {

    this._personFormService.launchModal({
      person: personToAdd,
      operation: Operation.Create
    });

  }

  public exportExcel(): void {
    this._personArray = this.personListComponent.personArray;
    this._exportExcelService.exportExcel(this._personArray, 'LISTA_DE_PESSOAS');
  }

  public confirmDeleteAllPeople(): void {

    this._confirmDialogService.launchConfirmDialog(
      {
        acceptButton: 'Sim, estou ciente e desejo continuar.',
        cancelButton: 'Cancelar',
        message: 'Você realmente deseja EXCLUIR TODAS AS PESSOAS registradas no sistema?',
        title: 'Antes de prosseguir...'
      }
    );
  }

  private _getResponseObservables(): void {

    this._personFormService.getResponseObservable()
                              .subscribe(operationResult => this._showToast(operationResult));

    this._confirmDialogService.getResponseObservable()
                                .subscribe(operation => this._deleteAllPeople());

  }

  private _showToast(message: String): void {
    //TODO here
    alert("imeplemtanr aqui" + message);
  }

  private _deleteAllPeople(): void {
    alert('operacao aceita');
    // this._personDeleteService.deleteAll(this._urlService.getEventIDFromRoute());
  }


}
