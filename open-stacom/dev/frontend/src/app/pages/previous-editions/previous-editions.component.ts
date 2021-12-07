import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventFindService } from 'src/app/services/event';
import {
  Event,
  Template
}  from './../../models';
import { TemplateFindService } from 'src/app/services/templates';
import { ExcelExportService } from 'src/app/services/utils';
import { PreviousEditionFormComponent, PreviousEditionListComponent } from 'src/app/components/previous-editions';
import { ConfirmDialogService } from 'src/app/components/dialog';

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

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _eventFindService: EventFindService,
    private _templateFindService: TemplateFindService,
    private _exportExcelService: ExcelExportService,
    private _confirmDialogService: ConfirmDialogService
  ) { }

  ngOnInit(): void {

    this._getEventAndTemplate();

  }

  public exportExcel(): void {
    this.editionsArray = this.previousEditionListComponent.editionsArray;
    this._exportExcelService.exportExcel(this.editionsArray, 'LISTA_DE_EDICOES_PASSADAS');
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
}
