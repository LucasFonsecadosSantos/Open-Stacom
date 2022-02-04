import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmDialogService } from 'src/app/components/dialog';
import { EventFindService } from 'src/app/services/event';
import { Event, Template } from './../../models';
import { ExcelExportService } from 'src/app/services/utils';
import { ScheduleFormService, ScheduleListComponent } from 'src/app/components/schedule';
import { Operation } from 'src/app/enums';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  @ViewChild("scheduleListComponent")
  public scheduleListComponent: ScheduleListComponent;

  public event: Event;

  public isDataLoaded: boolean = false;

  public entityDownloadURL: SafeUrl;


  constructor(
    private _exportExcelService: ExcelExportService,
    // private _personDeleteService: PersonDeleteService,
    private _eventFindService: EventFindService,
    private _activatedRoute: ActivatedRoute,
    private _formService: ScheduleFormService,
    private _confirmDialogService: ConfirmDialogService,
    private _sanitizer: DomSanitizer
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

  public confirmDeleteAllSchedule(): void {

  }

  public downloadEntitySource(): void {
    let fileName: string = this.event.name;
    let data = JSON.stringify(this.event.template.objects.schedule.content);
    this.entityDownloadURL = this._sanitizer.bypassSecurityTrustUrl(
      `data:text/json;charset=UTF-8,${encodeURIComponent(data)}`
    );
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
