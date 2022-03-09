import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ConfirmDialogService } from 'src/app/components/dialog';
import { ProceedingFormService, ProceedingListComponent } from 'src/app/components/proceeding';
import { Operation } from 'src/app/enums';
import { Template, Event, Webpage } from 'src/app/models';
import { EventFindService } from 'src/app/services/event';
import { ProceedingDeleteService } from 'src/app/services/proceeding';
import { TemplateFindService } from 'src/app/services/templates';
import { ExcelExportService } from 'src/app/services/utils';
import { WebpageFindService } from 'src/app/services/webpage/webpage-find.service';

@Component({
  selector: 'app-proceedings',
  templateUrl: './proceedings.component.html',
  styleUrls: ['./proceedings.component.scss']
})
export class ProceedingsComponent implements OnInit {

  @ViewChild("proceedingListComponent")
  public proceedingListComponent: ProceedingListComponent;

  public webpage: Webpage;

  public isDataLoaded: boolean = false;

  public entityDownloadURL: SafeUrl;


  constructor(
    private _exportExcelService: ExcelExportService,
    // private _personFormService: PersonFormService,
    private _deleteService: ProceedingDeleteService,
    private _webpageFindService: WebpageFindService,
    private _activatedRoute: ActivatedRoute,
    private _formService: ProceedingFormService,
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

  public exportExcel(): void {
    this._exportExcelService.exportExcel(this.proceedingListComponent.proceedingArray, 'LISTA_DE_ANAIS');
  }

  public hasData(): boolean {

    return  this.webpage &&
            this.webpage.template &&
            this.webpage.template.objects &&
            this.webpage.template.objects.proceeding &&
            this.webpage.template.objects.proceeding.content &&
            this.webpage.template.objects.proceeding.content.length > 0;
  }

  public deleteAllProceedings(): void {

    this._confirmDialogService.launchConfirmDialog(
      {
        acceptButton: 'Sim, estou ciente e desejo continuar.',
        cancelButton: 'Cancelar',
        message: 'Você realmente deseja EXCLUIR TODOS OS ANAIS registrados no sistema?',
        title: 'Antes de prosseguir...'
      }
    );
  }

  public addProceeding(): void {

    this._formService.launchModal({
      operation: Operation.Create
    });

  }

  public downloadEntitySource(): void {
    let fileName: string = this.webpage.template.objects.event.content.name;
    let data = JSON.stringify(this.webpage.template.objects.proceeding.content);
    this.entityDownloadURL = this._sanitizer.bypassSecurityTrustUrl(
      `data:text/json;charset=UTF-8,${encodeURIComponent(data)}`
    );
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
