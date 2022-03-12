import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Operation } from 'src/app/enums';
import { Activity, Event, Template, Webpage } from 'src/app/models';
import { FormModel } from 'src/app/models/form-model.model';
import { Schedule } from 'src/app/models/schedule.model';
import { ActivityFindService } from 'src/app/services/activity';
import { ScheduleCreateService, ScheduleDeleteService, ScheduleUpdateService } from 'src/app/services/schedule';
import { TemplateObjectValidatorService } from 'src/app/services/utils';
import { ScheduleFormService } from '.';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.scss']
})
export class ScheduleFormComponent implements OnInit {

  @ViewChild('scheduleForm')
  public scheduleForm: ScheduleFormComponent;

  @Input()
  public webpage: Webpage;

  public event: Event;

  public schedule: Schedule;

  public scheduleFormModel: FormModel;

  public activitiesArray: Activity[];

  constructor(
    private _modalService: NgbModal,
    private _activityFindService: ActivityFindService,
    private toastr: ToastrService,
    private _formService: ScheduleFormService,
    private _validatorService: TemplateObjectValidatorService,
    private _createService: ScheduleCreateService,
    private _updateService: ScheduleUpdateService,
    private _deleteService: ScheduleDeleteService
  ) { }

  ngOnInit(): void {

    this._populateActivities();
    this._getFormObservables();
    this.event = this.webpage.template.objects.event.content;

  }

  private _getFormObservables(): void {

    this._formService
        .getObservable()
        .subscribe(
          data => {
            this._setSchedule(data.model, data.operation);
            this._setScheduleFormModel(data);
            this._launchModal();
          }
        );

  }

  public get operationUpdate() {
    return Operation.Update;
  }

  public get operationCreate() {
    return Operation.Create;
  }

  private _setSchedule(schedule: Schedule, operation: Operation): void {

    this.schedule = (operation == Operation.Update) ? schedule : this._getNewSchedule();

  }

  private _getNewSchedule(): Schedule {

    return {
      "id": null,
      "date": null,
      "startTime": null,
      "endTime": null,
      "activity": null
    }

  }

  private _setScheduleFormModel(model: FormModel): void {

    this.scheduleFormModel = model;

  }

  private _launchModal(): void {

    if (!this._modalService.hasOpenModals()) {

      this._modalService.open(this.scheduleForm,
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

  public createOrUpdate(data: any) {

    if (this.schedule && this.schedule.id && this.schedule.id != null && this.schedule.id != '') {
      this._update(data);
    } else {
      this._create(data);
    }

  }

  private _create(schedule: any): void {

    try {
      this._validatorService.validate(this.webpage.template.objects.schedule, schedule);
      this._createService
        .create(this._loadForm(schedule), this.webpage)
        .subscribe({

          next: response => {

            this._showSuccessToast(
              `A programação da atividade ${schedule.activity.title} foi criada com sucesso.`
            );

          },
          error: exception => {

            this._showErrorToast(
              `Ops: Parece que houve um erro ao se criar a programação da atividade ${schedule.activity.title}. ERRO: ${exception}`
            );

          }

        });

    } catch(exception) {
      this._showErrorToast(
        `Ops: Parece que houve um erro ao validar as informações de agendamento da atividade ${schedule.activity.title}. ERRO: ${exception}`
      );
    }

  }

  public delete(schedule: Schedule): void {

    this._deleteService.delete(schedule, this.webpage);
    this._modalService.dismissAll('Cross click');

  }

  private _update(schedule: any): void {

    try {
      this._validatorService.validate(this.webpage.template.objects.schedule, schedule);
      this._updateService
        .update(this._loadForm(schedule), this.webpage)
        .subscribe({

          next: response => {

            this._showSuccessToast(
              `A programação da atividade ${schedule.activity.title} foi atualizada com sucesso.`
            );

          },
          error: exception => {

            this._showErrorToast(
              `Ops: Parece que houve um erro ao se atualizar a programação da atividade ${schedule.activity.title}. ERRO: ${exception}`
            );

          }

        });

    } catch(exception) {
      this._showErrorToast(
        `Ops: Parece que houve um erro ao validar as informações de agendamento da atividade ${schedule.activity.title}. ERRO: ${exception}`
      );
    }

  }

  private _populateActivities(): void {

    this.activitiesArray = this._activityFindService
                                .list(this.webpage);

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

  private _loadForm(data: any): Schedule {

    return {
      "id": data.id ? data.id : '',
      "activity": {'id': data.activity ? data.activity : ''},
      "date": data.date ? data.date : '',
      "startTime": data.startTime ? data.startTime : '',
      "endTime": data.endTime ? data.endTime : ''
    };

  }

}
