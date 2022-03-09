import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventFindService } from 'src/app/services/event';
import {
  Event,
  Template,
  Webpage
}  from './../../models';
import { ExcelExportService } from 'src/app/services/utils';
import {  PreviousEditionListComponent } from 'src/app/components/previous-editions';
import { ConfirmDialogService } from 'src/app/components/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { WebpageFindService } from 'src/app/services/webpage/webpage-find.service';

@Component({
  selector: 'app-previous-editions',
  templateUrl: './previous-editions.component.html',
  styleUrls: ['./previous-editions.component.scss']
})
export class PreviousEditionsComponent implements OnInit {

  @ViewChild(PreviousEditionListComponent)
  public previousEditionListComponent: PreviousEditionListComponent

  public webpage: Webpage;

  public editionsArray: any[];

  public isDataLoaded: boolean = false;

  public entityDownloadURL: SafeUrl;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _webpageFindService: WebpageFindService,
    private _exportExcelService: ExcelExportService,
    private _confirmDialogService: ConfirmDialogService,
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {

    this._getWebpageFromParam();

  }

  public exportExcel(): void {
    this.editionsArray = this.previousEditionListComponent.editionsArray;
    this._exportExcelService.exportExcel(this.editionsArray, 'LISTA_DE_EDICOES_PASSADAS');
  }

  public downloadEntitySource(): void {
    let fileName: string = this.webpage.template.objects.event.content.name;
    let data = JSON.stringify(this.webpage.template.objects.pastEdition.content);
    this.entityDownloadURL = this._sanitizer.bypassSecurityTrustUrl(
      `data:text/json;charset=UTF-8,${encodeURIComponent(data)}`
    );
  }

  public hasData(): boolean {

    return  this.webpage &&
            this.webpage.template &&
            this.webpage.template.objects &&
            this.webpage.template.objects.pastEdition &&
            this.webpage.template.objects.pastEdition.content &&
            this.webpage.template.objects.pastEdition.content.length > 0;
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

}
