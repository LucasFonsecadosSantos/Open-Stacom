import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmDialogService } from 'src/app/components/dialog';
import { Event, Template, Webpage } from './../../models';
import { ExcelExportService } from 'src/app/services/utils';
import { ScheduleFormService, ScheduleListComponent } from 'src/app/components/schedule';
import { Operation } from 'src/app/enums';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { WebpageFindService } from 'src/app/services/webpage/webpage-find.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  @ViewChild("scheduleListComponent")
  public scheduleListComponent: ScheduleListComponent;

  public webpage: Webpage;

  public isDataLoaded: boolean = false;

  public entityDownloadURL: SafeUrl;


  constructor(
    private _exportExcelService: ExcelExportService,
    // private _personDeleteService: PersonDeleteService,
    private _webpageFindService: WebpageFindService,
    private _activatedRoute: ActivatedRoute,
    private _formService: ScheduleFormService,
    private _confirmDialogService: ConfirmDialogService,
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {

    this._getWebpageFromParam();
    this._getResponseObservables();

  }


  private _getWebpageFromParam(): void {

    this._activatedRoute.paramMap.subscribe(

      params => {
        this._getWebpage(params.get('webpageID'));
      }

    );
  }

  private _getWebpage(webpageID: string): void {

    this._webpageFindService
        .find(webpageID)
        .subscribe(
          webpage => {
            this.webpage = webpage;
            this.isDataLoaded = true;
          }
        );
  }

  public confirmDeleteAllSchedule(): void {

  }

  public hasData(): boolean {

    return  this.webpage &&
            this.webpage.template &&
            this.webpage.template.objects &&
            this.webpage.template.objects.schedule &&
            this.webpage.template.objects.schedule.content &&
            this.webpage.template.objects.schedule.content.length > 0;
  }


  public downloadEntitySource(): void {
    let fileName: string = this.webpage.template.objects.event.content.name;
    let data = JSON.stringify(this.webpage.template.objects.schedule.content);
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
