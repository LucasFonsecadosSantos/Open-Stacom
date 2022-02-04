import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CommitteeFormService, CommitteeListComponent } from 'src/app/components/committee';
import { ConfirmDialogService } from 'src/app/components/dialog';
import { Operation } from 'src/app/enums';
import { EventFindService } from 'src/app/services/event';
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

  public entityDownloadURL: SafeUrl;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _exportExcelService: ExcelExportService,
    private _eventFindService: EventFindService,
    private _confirmDialogService: ConfirmDialogService,
    private _committeeFormService: CommitteeFormService,
    private _sanitizer: DomSanitizer
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

    this._eventFindService
        .find(eventID)
        .subscribe(
          event => {
            this.event = event;
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

  public hasData(): boolean {

    return  this.event &&
            this.event.template &&
            this.event.template.objects &&
            this.event.template.objects.committee &&
            this.event.template.objects.committee.content &&
            this.event.template.objects.committee.content.length > 0;
  }

  public downloadEntitySource(): void {
    let fileName: string = this.event.name;
    let data = JSON.stringify(this.event.template.objects.committee.content);
    this.entityDownloadURL = this._sanitizer.bypassSecurityTrustUrl(
      `data:text/json;charset=UTF-8,${encodeURIComponent(data)}`
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
