import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmDialogService } from 'src/app/components/dialog';
import { ProceedingFormService, ProceedingListComponent } from 'src/app/components/proceeding';
import { Operation } from 'src/app/enums';
import { Template, Event } from 'src/app/models';
import { EventFindService } from 'src/app/services/event';
import { ProceedingDeleteService } from 'src/app/services/proceeding';
import { TemplateFindService } from 'src/app/services/templates';
import { ExcelExportService } from 'src/app/services/utils';

@Component({
  selector: 'app-proceedings',
  templateUrl: './proceedings.component.html',
  styleUrls: ['./proceedings.component.scss']
})
export class ProceedingsComponent implements OnInit {

  @ViewChild("proceedingListComponent")
  public proceedingListComponent: ProceedingListComponent;

  public event: Event;

  public template: Template;

  public isDataLoaded: boolean = false;


  constructor(
    private _exportExcelService: ExcelExportService,
    // private _personFormService: PersonFormService,
    private _deleteService: ProceedingDeleteService,
    private _templateFindService: TemplateFindService,
    private _eventFindService: EventFindService,
    private _activatedRoute: ActivatedRoute,
    private _formService: ProceedingFormService,
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
            this.isDataLoaded = true;
          }
        );
  }

  public exportExcel(): void {
    this._exportExcelService.exportExcel(this.proceedingListComponent.proceedingArray, 'LISTA_DE_ANAIS');
  }

  public deleteAllProceedings(): void {

    this._confirmDialogService.launchConfirmDialog(
      {
        acceptButton: 'Sim, estou ciente e desejo continuar.',
        cancelButton: 'Cancelar',
        message: 'Você realmente deseja EXCLUIR TODOS OS ANAIS registrados no sistema?',
        title: 'Antes de prosseguir...'
      }
    );
  }

  public addProceeding(): void {

    this._formService.launchModal({
      operation: Operation.Create
    });

  }

  private _getResponseObservables(): void {

    // this._personFormService.getResponseObservable()
    //                           .subscribe(operationResult => this._showToast(operationResult));

    // this._confirmDialogService.getResponseObservable()
    //                             .subscribe(operation => this._deleteAllPeople());

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
