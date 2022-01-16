import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Operation, OperationResult } from 'src/app/enums';
import { Template, Event, PricePlan } from 'src/app/models';
import { FormModel } from 'src/app/models/form-model.model';
import { PricePlanCreateService, PricePlanDeleteService, PricePlanUpdateService } from 'src/app/services/price-plan';
import { PriceFormService } from '.';

@Component({
  selector: 'app-price-form',
  templateUrl: './price-form.component.html',
  styleUrls: ['./price-form.component.scss']
})
export class PriceFormComponent implements OnInit {

  @ViewChild('priceForm')
  public priceForm: PriceFormComponent;

  @Input()
  public event: Event;

  public pricePlan: PricePlan;

  public pricePlanFormModel: FormModel;

  public static readonly operation: Operation;

  constructor(
    private _modalService: NgbModal,
    private _formService: PriceFormService,
    private toastr: ToastrService,
    private _deleteService: PricePlanDeleteService,
    private _createService: PricePlanCreateService,
    private _updateService: PricePlanUpdateService
  ) { }

  ngOnInit(): void {

    this._getFormObservables();

  }

  private _getFormObservables(): void {

    this._formService
          .getObservable()
          .subscribe(data => {

            this._setPricePlan(data.model, data.operation);
            this._setPricePlanFormModel(data);
            this._launchModal();
            // this._buildFormFields();

          });

  }

  public get operationUpdate() {
    return Operation.Update;
  }

  public get operationCreate() {
    return Operation.Create;
  }

  private _setPricePlan(pricePlan: PricePlan, operation: Operation): void {

    this.pricePlan = (operation == Operation.Update) ? pricePlan : this._getNewPricePlan();

  }

  private _getNewPricePlan(): PricePlan {

    return {
      "id": null,
      "name": null,
      "description": null,
      "value": null
    }

  }

  private _setPricePlanFormModel(model: FormModel): void {

    this.pricePlanFormModel = model;

  }

  private _launchModal(): void {

    if (!this._modalService.hasOpenModals()) {

      this._modalService.open(this.priceForm,
        {
          ariaLabelledBy: 'modal-basic-title',
          windowClass: 'modal-custom',
          size: 'lg',
          centered: true,
          modalDialogClass: 'modal-dialog-custom'
        }
      );

    }

  }

  public delete(pricePlan: PricePlan): void {

    this._deleteService.delete(pricePlan, this.event);
    this._modalService.dismissAll('Cross click');

  }

  public createOrUpdate(data: any) {

    if (this.pricePlan && this.pricePlan.id && this.pricePlan.id != null && this.pricePlan.id != '') {
      this._update(data);
    } else {
      this._create(data);
    }

  }

  private _create(pricePlan: PricePlan): void {

    this._createService
        .create(this._loadForm(pricePlan), this.event)
        .subscribe({

          next: response => {

            this._showSuccessToast(
              `O pacote de preços ${pricePlan.name} foi adicionado com sucesso.`
            );

          },
          error: exception => {

            this._showErrorToast(
              `Ops: Parece que houve um erro ao se criar o pacote de preços ${pricePlan.name}. ERRO: ${exception}`
            );
          }

        });

  }

  private _update(pricePlan: PricePlan): void {

    this._updateService
        .update(this._loadForm(pricePlan), this.event)
        .subscribe({

          next: response => {

            this._showSuccessToast(
              `O pacote de preços ${pricePlan.name} foi atualizado com sucesso.`
            );

          },
          error: exception => {

            this._showErrorToast(
              `Ops: Parece que houve um erro ao se atualizar o pacote de preços ${pricePlan.name}. ERRO: ${exception}`
            );
          }

        });

  }

  private _showSuccessToast(message: string): void {

    this.toastr.success(`<span class="tim-icons icon-check-2" [data-notify]="icon"></span> ${message}`, '', {
      disableTimeOut: false,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-success alert-with-icon",
      positionClass: 'toast-top-center'
    });

  }

  private _showErrorToast(message: string): void {

    this.toastr.error(`<span class="tim-icons icon-check-2" [data-notify]="icon"></span> ${message}`, '', {
      disableTimeOut: false,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-error alert-with-icon",
      positionClass: 'toast-top-center'
    });

  }

  private _loadForm(data: any): PricePlan {

    console.log(data);

    return {
      "id": data.id ? data.id : '',
      "name": data.name ? data.name : '',
      "value": data.value ? data.value : '',
      "description": data.description ? data.description : ''
    };

  }


}
