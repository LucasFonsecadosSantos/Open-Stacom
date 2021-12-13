import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ActivityType, Operation } from 'src/app/enums';
import { Activity, ActivityForm, Event, Person, PricePlan, Template } from 'src/app/models';
import { ActivityCreateService, ActivityDeleteService, ActivityUpdateService } from 'src/app/services/activity';
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

  public activity: Activity;

  public activityFormModel: ActivityForm;

  public personArray: Person[];

  public pricePlans: PricePlan[];

  public static readonly operation: Operation;

  public static readonly activityType: ActivityType;

  constructor(
    private _modalService: NgbModal,
    private _formService: ActivityFormService,
    private toastr: ToastrService,
    private _deleteService: ActivityDeleteService,
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
    return Object.keys(ActivityType).filter(key => !isNaN(Number(ActivityType[key])));;
  }

  private _fetchPerson(): void {

    this.personArray = this._personFindService
                            .list(this.event);


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

    this.pricePlans = this._pricePlanFindService
                          .list(this.event);

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
        .create(this._loadForm(activity), this.event)
        .subscribe({

          next: response => {

            this._showSuccessToast(
              `A atividade ${activity.title} foi criado com sucesso.`
            );

          },
          error: exception => {

            this._showErrorToast(
              `Ops: Parece que houve um erro ao se criar a atividade ${activity.title}. ERRO: ${exception}`
            );

          }

        });

  }

  private _updateActivity(activity: Activity): void {

    this._updateService
        .update(this._loadForm(activity), this.event)
        .subscribe({

          next: response => {

            this._showSuccessToast(
              `A atividade ${activity.title} foi atualizada com sucesso.`
            );

          },
          error: exception => {

            this._showErrorToast(
              `Ops: Parece que houve um erro ao se atualizar a atividade ${activity.title}. ERRO: ${exception}`
            );

          }

        });

  }

  public delete(activity: Activity): void {

    this._deleteService.delete(activity, this.event);
    this._modalService.dismissAll('Cross click');

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

  private _loadForm(data: any): Activity {

    return {
      "id": data.id ? data.id : '',
      "title": data.title ? data.title : '',
      "type": data.type ? data.type : '',
      "brief": data.brief ? data.brief : '',
      "poweredBy": data.poweredBy ? data.poweredBy : '',
      "responsible": {id: data.responsible.id ? data.responsible.id : ''},
      "description": data.description ? data.description : '',
      "picture": data.picture ? data.picture : '',
      "targetPublic": data.targetPublic ? data.targetPublic : '',
      "location": data.loaction ? data.location : '',
      "price": data.price ? data.price : '',
      "pricePlan": data.pricePlan ? data.pricePlan : '',
    };

  }

}
