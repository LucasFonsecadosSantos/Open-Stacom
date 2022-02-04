import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ActivityFormService, ActivityListComponent } from 'src/app/components/activity';
import { ConfirmDialogService } from 'src/app/components/dialog';
import { Operation } from 'src/app/enums';
import { EventFindService } from 'src/app/services/event';
import { ExcelExportService } from 'src/app/services/utils';
import {
  Activity,
  Event,
  Template
} from './../../models';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  @ViewChild("ActivityListComponent")
  public activityListComponent: ActivityListComponent;

  public event: Event;

  public template: Template;

  public isDataLoaded: boolean = false;

  public entityDownloadURL: SafeUrl;


  constructor(
    private _exportExcelService: ExcelExportService,
    // private _personFormService: PersonFormService,
    // private _personDeleteService: PersonDeleteService,
    private _eventFindService: EventFindService,
    private _activatedRoute: ActivatedRoute,
    private _formService: ActivityFormService,
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

  public exportExcel(): void {
    this._exportExcelService
        .exportExcel(
          this.activityListComponent.activityArray, 'LISTA_DE_ATIVIDADES'
        );
  }

  public hasData(): boolean {

    return  this.event &&
            this.event.template &&
            this.event.template.objects &&
            this.event.template.objects.activity &&
            this.event.template.objects.activity.content &&
            this.event.template.objects.activity.content.length > 0;
  }

  public downloadEntitySource(): void {
    let fileName: string = this.event.name;
    let data = JSON.stringify(this.event.template.objects.activity.content);
    this.entityDownloadURL = this._sanitizer.bypassSecurityTrustUrl(
      `data:text/json;charset=UTF-8,${encodeURIComponent(data)}`
    );
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

  public openAddActivityForm(): void {

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
