import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommitteeFormService, CommitteeListComponent } from 'src/app/components/committee';
import { ConfirmDialogService } from 'src/app/components/dialog';
import { Operation } from 'src/app/enums';

import { EventFindService } from 'src/app/services/event';
import { TemplateFindService } from 'src/app/services/templates';
import { ExcelExportService } from 'src/app/services/utils';
import {
  Template,
  Event
} from './../../models';

@Component({
  selector: 'app-committe',
  templateUrl: './committe.component.html',
  styleUrls: ['./committe.component.scss']
})
export class CommitteComponent implements OnInit {

  @ViewChild(CommitteeListComponent)
  public committeeListComponent: CommitteeListComponent;

  public event: Event;

  public template: Template;

  public isDataLoaded: boolean = false;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _exportExcelService: ExcelExportService,
    private _eventFindService: EventFindService,
    private _confirmDialogService: ConfirmDialogService,
    private _committeeFormService: CommitteeFormService,
    private _templateFindService: TemplateFindService
  ) { }

  ngOnInit(): void {

    this._getEventAndTemplate();
    // this._getResponseObservables();

  }


  private _getEventAndTemplate(): void {

    this._activatedRoute.paramMap.subscribe(

      params => {
        this._getEvent(params.get('eventID'));
      }

    );
  }

  private _getEvent(eventID: string): void {

    this._eventFindService.find(eventID).subscribe(event => {

      this.event = event;
      this._getTemplateById(event.templateID);

    });

  }

  private _getTemplateById(templateID: string) {

    this._templateFindService.find(templateID).subscribe(

      template =>
         {
           this.template = template;
           this.isDataLoaded = true;
          }

    );
  }

  public openAddCommitteeForm(): void {

    this._committeeFormService.launchModal({
      operation: Operation.Create
    });

  }

  public exportExcel(): void {

    this._exportExcelService.exportExcel(
      this.committeeListComponent.committeesArray,
      'LISTA_DE_COMITES'
    );

  }

  public confirmDeleteAllCommittees(): void {

    this._confirmDialogService.launchConfirmDialog(
      {
        acceptButton: 'Sim, estou ciente e desejo continuar.',
        cancelButton: 'Cancelar',
        message: 'Você realmente deseja EXCLUIR TODOS OS COMITÊS registrados no sistema?',
        title: 'Antes de prosseguir...'
      }
    );
  }

}
