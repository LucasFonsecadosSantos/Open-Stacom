import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventFindService } from 'src/app/services/event';
import {
  Event,
  Template
}  from './../../models';
import { ExcelExportService } from 'src/app/services/utils';
import {  PreviousEditionListComponent } from 'src/app/components/previous-editions';
import { ConfirmDialogService } from 'src/app/components/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-previous-editions',
  templateUrl: './previous-editions.component.html',
  styleUrls: ['./previous-editions.component.scss']
})
export class PreviousEditionsComponent implements OnInit {

  @ViewChild(PreviousEditionListComponent)
  public previousEditionListComponent: PreviousEditionListComponent

  public template: Template;
  public event: Event;
  public editionsArray: any[];
  public isDataLoaded: boolean = false;
  public entityDownloadURL: SafeUrl;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _eventFindService: EventFindService,
    private _exportExcelService: ExcelExportService,
    private _confirmDialogService: ConfirmDialogService,
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {

    this._getEventAndTemplate();

  }

  public exportExcel(): void {
    this.editionsArray = this.previousEditionListComponent.editionsArray;
    this._exportExcelService.exportExcel(this.editionsArray, 'LISTA_DE_EDICOES_PASSADAS');
  }

  public downloadEntitySource(): void {
    let fileName: string = this.event.name;
    let data = JSON.stringify(this.event.template.objects.pastEdition.content);
    this.entityDownloadURL = this._sanitizer.bypassSecurityTrustUrl(
      `data:text/json;charset=UTF-8,${encodeURIComponent(data)}`
    );
  }

  public hasData(): boolean {

    return  this.event &&
            this.event.template &&
            this.event.template.objects &&
            this.event.template.objects.pastEdition &&
            this.event.template.objects.pastEdition.content &&
            this.event.template.objects.pastEdition.content.length > 0;
  }

  public confirmDeleteAllEditions(): void {

    this._confirmDialogService.launchConfirmDialog(
      {
        acceptButton: 'Sim, estou ciente e desejo continuar.',
        cancelButton: 'Cancelar',
        message: 'Você realmente deseja EXCLUIR TODAS AS EDIÇÕES registradas no sistema?',
        title: 'Antes de prosseguir...'
      }
    );
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

}
