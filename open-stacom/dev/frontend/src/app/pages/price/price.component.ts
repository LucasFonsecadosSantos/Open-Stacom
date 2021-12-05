import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmDialogService } from 'src/app/components/dialog';
import { PriceFormService, PriceListComponent } from 'src/app/components/price';
import { Operation } from 'src/app/enums';
import { Event, Template } from 'src/app/models';
import { EventFindService } from 'src/app/services/event';
import { PricePlanDeleteService } from 'src/app/services/price-plan';
import { TemplateFindService } from 'src/app/services/templates';
import { ExcelExportService } from 'src/app/services/utils';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  @ViewChild("pricePlanList")
  public pricePlan: PriceListComponent;

  public event: Event;

  public template: Template;

  public isDataLoaded: boolean = false;

  constructor(
    private _exportExcelService: ExcelExportService,
    private _priceDeleteService: PricePlanDeleteService,
    private _templateFindService: TemplateFindService,
    private _eventFindService: EventFindService,
    private _activatedRoute: ActivatedRoute,
    private _formService: PriceFormService,
    private _confirmDialogService: ConfirmDialogService
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

  public addPricePlan(): void {

    this._formService.launchModal({
      operation: Operation.Create
    });

  }

  public exportExcel(): void {
    this._exportExcelService.exportExcel(this.pricePlan.pricePlanArray, 'LISTA_DE_VALORES');
  }

  public confirmDeleteAllPlans(): void {

    this._confirmDialogService.launchConfirmDialog(
      {
        acceptButton: 'Sim, estou ciente e desejo continuar.',
        cancelButton: 'Cancelar',
        message: 'Você realmente deseja EXCLUIR TODAS OS PLANOS registrados no sistema?',
        title: 'Antes de prosseguir...'
      }
    );
  }

  // private _getResponseObservables(): void {

  //   this._personFormService.getResponseObservable()
  //                             .subscribe(operationResult => this._showToast(operationResult));

  //   this._confirmDialogService.getResponseObservable()
  //                               .subscribe(operation => this._deleteAllPeople());

  // }

  private _showToast(message: String): void {
    //TODO here
    alert("imeplemtanr aqui" + message);
  }

  private _deleteAllPeople(): void {
    alert('operacao aceita');
    // this._personDeleteService.deleteAll(this._urlService.getEventIDFromRoute());
  }

}
