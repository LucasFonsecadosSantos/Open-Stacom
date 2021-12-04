// import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivityType, Operation } from 'src/app/enums';
import { Activity, ActivityForm, Event, Person, PricePlan, Template } from 'src/app/models';
import { ActivityCreateService, ActivityUpdateService } from 'src/app/services/activity';
import { PersonFindService } from 'src/app/services/person';
import { PricePlanFindService } from 'src/app/services/price-plan';
import { ActivityFormService } from '.';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent implements OnInit {

  @ViewChild('activityForm')
  public activityForm: ActivityFormComponent;

  @Input()
  public event: Event;

  @Input()
  public template: Template;

  public activity: Activity;

  public activityFormModel: ActivityForm;

  public personArray: Person[];

  public pricePlans: PricePlan[];

  public static readonly operation: Operation;

  public static readonly activityType: ActivityType;

  constructor(
    private _modalService: NgbModal,
    private _formService: ActivityFormService,
    private _createService: ActivityCreateService,
    private _updateService: ActivityUpdateService,
    private _personFindService: PersonFindService,
    private _pricePlanFindService: PricePlanFindService
  ) { }

  ngOnInit(): void {

    this._getFormObservables();

  }

  private _getFormObservables(): void {

    this._formService
          .getObservable()
          .subscribe(data => {

            this._setActivity(data.activity, data.operation);
            this._setActivityFormModel(data);
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

  public get possibleActivityTypes() {
    return Object.keys(ActivityType);
  }

  private _fetchPerson(): void {

    this._personFindService.list(this.event.id)
                            .subscribe(
                              fetchedPerson => this.personArray = fetchedPerson
                            );

  }

  private _setActivity(activity: Activity, operation: Operation): void {

    this.activity = (operation == Operation.Update) ? activity : this._getNewActivity();

  }

  private _getNewActivity(): Activity {

    return {
      "id": null,
      "title": null,
      "type": null,
      "brief": null,
      "description": null,
      "location": null,
      "picture": null,
      "poweredBy": null,
      "price": null,
      "pricePlan": null,
      "responsible": null,
      "targetPublic": null
    }

  }

  private _setActivityFormModel(model: ActivityForm): void {

    this.activityFormModel = model;

  }

  private _launchModal(): void {

    if (!this._modalService.hasOpenModals()) {

      this._fetchPerson();
      this._fetchPricePlans();

      this._modalService.open(this.activityForm,
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

  private _fetchPricePlans(): void {

    this._pricePlanFindService
          .list(this.event.id)
          .subscribe(
            planArray => this.pricePlans = planArray
          );

  }

  public createOrUpdate(activity: Activity): void {

    if (activity.id) {
      this._updateActivity(activity);
    } else {
      this._createActivity(activity);
    }

  }

  private _createActivity(activity: Activity): void {

    this._createService
        .create(activity)
        .subscribe(response => {
          //TODO Here - IMplements a toast with message
        });

  }

  private _updateActivity(activity: Activity): void {

    this._updateService
        .update(activity)
        .subscribe(response => {
          //TODO Here - implement a toast with message
        });

  }

}
