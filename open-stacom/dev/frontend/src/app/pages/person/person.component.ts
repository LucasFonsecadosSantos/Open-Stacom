import { PersonFormService } from './../../components/person';
import { ConfirmDialogService } from './../../components/dialog/confirm-dialog/confirm-dialog.service';
import { PersonDeleteService } from './../../services/person/person-delete.service';
import { ExcelExportService } from './../../services/utils/excel-export.service';
import { PersonListComponent } from './../../components/person/person-list/person-list.component';


import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from 'src/app/models';
import { Operation } from 'src/app/enums';
import { Template, Event } from './../../models';
import { SharedEventService, SharedTemplateService } from 'src/app/services/shared';
import { TemplateFindService } from 'src/app/services/templates';
import { EventFindService } from 'src/app/services/event';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @ViewChild(PersonListComponent)
  private personListComponent: PersonListComponent;

  private _personArray: Person[];

  public event: Event;

  public template: Template;

  public closeResult: string;

  public isDataLoaded: boolean = false;

  constructor(
    private _exportExcelService: ExcelExportService,
    private _personFormService: PersonFormService,
    private _personDeleteService: PersonDeleteService,
    private _templateFindService: TemplateFindService,
    private _eventFindService: EventFindService,
    private _activatedRoute: ActivatedRoute,
    private _confirmDialogService: ConfirmDialogService
  ) { }

  ngOnInit(): void {

    this._getEventAndTemplate();
    this._getResponseObservables();

  }


  private _getEventAndTemplate(): void {

    this._activatedRoute.paramMap.subscribe(

      params => {
        this._getEvent(params.get('eventID'));
      }

    );
  }

  private _getEvent(eventID: string): void {

    this._eventFindService
        .find(eventID)
        .subscribe(
          event => {
            this.event = event;
            this._getTemplateById(event.id);
          }
        );
  }

  private _getTemplateById(eventID: string): void {

    this._templateFindService
        .find(eventID)
        .subscribe(
          template => {
            this.template = template;
            this.isDataLoaded = true;
          }
        );
  }

  public openAddPersonForm(): void {

    this._personFormService.launchModal({
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
