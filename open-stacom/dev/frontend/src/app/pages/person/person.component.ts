import { PersonFormService } from './../../components/person';
import { ConfirmDialogService } from './../../components/dialog/confirm-dialog/confirm-dialog.service';
import { PersonDeleteService } from './../../services/person/person-delete.service';
import { ExcelExportService } from './../../services/utils/excel-export.service';
import { PersonListComponent } from './../../components/person/person-list/person-list.component';


import { Component, OnInit, ViewChild } from '@angular/core';
import { Operation } from 'src/app/enums';
import { Template, Event, Person, Webpage } from './../../models';
import { TemplateFindService } from 'src/app/services/templates';
import { EventFindService } from 'src/app/services/event';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { WebpageFindService } from 'src/app/services/webpage/webpage-find.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @ViewChild(PersonListComponent)
  private personListComponent: PersonListComponent;

  private _personArray: Person[];

  public webpage: Webpage;

  public template: Template;

  public closeResult: string;

  public isDataLoaded: boolean = false;

  public entityDownloadURL: SafeUrl;

  constructor(
    private _exportExcelService: ExcelExportService,
    private _personFormService: PersonFormService,
    private _personDeleteService: PersonDeleteService,
    private _templateFindService: TemplateFindService,
    private _webpageFindService: WebpageFindService,
    private _activatedRoute: ActivatedRoute,
    private _sanitizer: DomSanitizer
    // private _confirmDialogService: ConfirmDialogService
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

  public openAddPersonForm(): void {

    this._personFormService.launchModal({
      operation: Operation.Create
    });

  }

  public exportExcel(): void {
    this._personArray = this.personListComponent.personArray;
    this._exportExcelService.exportExcel(this._personArray, 'LISTA_DE_PESSOAS');
  }

  public downloadEntitySource(): void {
    let fileName: string = this.webpage.template.objects.event.content.name;
    let data = JSON.stringify(this.webpage.template.objects.person.content);
    this.entityDownloadURL = this._sanitizer.bypassSecurityTrustUrl(
      `data:text/json;charset=UTF-8,${encodeURIComponent(data)}`
    );
  }

  public hasData(): boolean {

    return  this.webpage &&
            this.webpage.template &&
            this.webpage.template.objects &&
            this.webpage.template.objects.person &&
            this.webpage.template.objects.person.content &&
            this.webpage.template.objects.person.content.length > 0;
  }

  public confirmDeleteAllPeople(): void {

    // this._confirmDialogService.launchConfirmDialog(
    //   {
    //     acceptButton: 'Sim, estou ciente e desejo continuar.',
    //     cancelButton: 'Cancelar',
    //     message: 'Você realmente deseja EXCLUIR TODAS AS PESSOAS registradas no sistema?',
    //     title: 'Antes de prosseguir...'
    //   }
    // );
  }

  private _getResponseObservables(): void {

    this._personFormService.getResponseObservable()
                              .subscribe(operationResult => this._showToast(operationResult));

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
