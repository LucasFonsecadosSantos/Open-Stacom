import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Operation } from 'src/app/enums';
import { Template, Event, PricePlan, PricePlanForm } from 'src/app/models';
import { PricePlanCreateService, PricePlanUpdateService } from 'src/app/services/price-plan';
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

  @Input()
  public template: Template;

  public pricePlan: PricePlan;

  public pricePlanFormModel: PricePlanForm;

  public static readonly operation: Operation;

  constructor(
    private _modalService: NgbModal,
    private _formService: PriceFormService,
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

            this._setPricePlan(data.pricePlan, data.operation);
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

  private _setPricePlanFormModel(model: PricePlanForm): void {

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

  public create(pricePlan: PricePlan): void {

    this._createService
        .create(pricePlan, this.event)
        .subscribe(response => {
          //TODO Here - IMplements a toast with message
        });

  }

  public update(pricePlan: PricePlan): void {

    this._updateService
        .update(pricePlan)
        .subscribe(response => {
          //TODO Here - implement a toast with message
        });

  }


}
