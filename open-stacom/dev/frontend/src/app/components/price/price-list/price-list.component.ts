import { Component, Input, OnInit } from '@angular/core';
import { Operation } from 'src/app/enums';
import { Event, PricePlan } from 'src/app/models';
import { PricePlanDeleteService, PricePlanFindService } from 'src/app/services/price-plan';
import { PriceFormService } from '..';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {

  @Input()
  public event: Event;

  public pricePlanArray: PricePlan[];

  constructor(
    private _findService: PricePlanFindService,
    private _deleteService: PricePlanDeleteService,
    private _formService: PriceFormService
  ) { }

  ngOnInit(): void {

    this._populateList();

  }

  public deletePricePlan(pricePlan: PricePlan): void {

    this._deleteService
        .delete(pricePlan, this.event)
        .subscribe(
          //TODO here
        );

  }

  public editPricePlan(pricePlan: PricePlan): void {

    this._formService
        .launchModal({
          operation: Operation.Update,
          model: pricePlan
        });

  }

  private _populateList(): void {

    this.pricePlanArray = this._findService
                              .list(this.event);

  }

}
