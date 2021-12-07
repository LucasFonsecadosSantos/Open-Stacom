import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmDialogService } from 'src/app/components/dialog';
import { EventFindService } from 'src/app/services/event';
import { TemplateFindService } from 'src/app/services/templates';
import { Event, Template } from './../../models';
import { ExcelExportService } from 'src/app/services/utils';
import { ScheduleFormService, ScheduleListComponent } from 'src/app/components/schedule';
import { Operation } from 'src/app/enums';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  @ViewChild("scheduleListComponent")
  public scheduleListComponent: ScheduleListComponent;

  public event: Event;

  public template: Template;

  public isDataLoaded: boolean = false;


  constructor(
    private _exportExcelService: ExcelExportService,
    // private _personFormService: PersonFormService,
    // private _personDeleteService: PersonDeleteService,
    private _templateFindService: TemplateFindService,
    private _eventFindService: EventFindService,
    private _activatedRoute: ActivatedRoute,
    private _formService: ScheduleFormService,
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

  public confirmDeleteAllSchedule(): void {

  }

  public exportExcel(): void {
    this._exportExcelService.exportExcel(this.scheduleListComponent.scheduleArray, 'PROGRAMACAO');
  }

  public confirmDeleteAllActivities(): void {

    this._confirmDialogService.launchConfirmDialog(
      {
        acceptButton: 'Sim, estou ciente e desejo continuar.',
        cancelButton: 'Cancelar',
        message: 'Você realmente deseja EXCLUIR TODAS AS ATIVIDADES registradas no sistema?',
        title: 'Antes de prosseguir...'
      }
    );
  }

  public scheduleActivity(): void {

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
