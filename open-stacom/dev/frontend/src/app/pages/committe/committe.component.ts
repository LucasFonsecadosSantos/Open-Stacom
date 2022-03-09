import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CommitteeFormService, CommitteeListComponent } from 'src/app/components/committee';
import { ConfirmDialogService } from 'src/app/components/dialog';
import { Operation } from 'src/app/enums';
import { EventFindService } from 'src/app/services/event';
import { ExcelExportService } from 'src/app/services/utils';
import { WebpageFindService } from 'src/app/services/webpage/webpage-find.service';
import {
  Template,
  Event,
  Webpage
} from './../../models';

@Component({
  selector: 'app-committe',
  templateUrl: './committe.component.html',
  styleUrls: ['./committe.component.scss']
})
export class CommitteComponent implements OnInit {

  @ViewChild(CommitteeListComponent)
  public committeeListComponent: CommitteeListComponent;

  public webpage: Webpage;

  public template: Template;

  public isDataLoaded: boolean = false;

  public entityDownloadURL: SafeUrl;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _exportExcelService: ExcelExportService,
    private _webpageFindService: WebpageFindService,
    private _confirmDialogService: ConfirmDialogService,
    private _committeeFormService: CommitteeFormService,
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {

    this._getWebpageFromParam();
    // this._getResponseObservables();

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

    return  this.webpage &&
            this.webpage.template &&
            this.webpage.template.objects &&
            this.webpage.template.objects.committee &&
            this.webpage.template.objects.committee.content &&
            this.webpage.template.objects.committee.content.length > 0;
  }

  public downloadEntitySource(): void {
    let fileName: string = this.webpage.template.objects.event.content.name;
    let data = JSON.stringify(this.template.objects.committee.content);
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
