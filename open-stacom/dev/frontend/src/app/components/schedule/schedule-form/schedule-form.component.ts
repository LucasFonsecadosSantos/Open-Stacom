import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Operation } from 'src/app/enums';
import { Activity, Event, ScheduleForm, Template } from 'src/app/models';
import { Schedule } from 'src/app/models/schedule.model';
import { ActivityFindService } from 'src/app/services/activity';
import { ScheduleCreateService, ScheduleDeleteService, ScheduleUpdateService } from 'src/app/services/schedule';
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
  public event: Event;

  @Input()
  public template: Template;

  public schedule: Schedule;

  public scheduleFormModel: ScheduleForm;

  public activitiesArray: Activity[];

  constructor(
    private _modalService: NgbModal,
    private _activityFindService: ActivityFindService,
    private _formService: ScheduleFormService,
    private _createService: ScheduleCreateService,
    private _updateService: ScheduleUpdateService,
    private _deleteService: ScheduleDeleteService
  ) { }

  ngOnInit(): void {

    this._populateActivities();
    this._getFormObservables();

  }

  private _getFormObservables(): void {

    this._formService
        .getObservable()
        .subscribe(
          data => {
            this._setSchedule(data.schedule, data.operation);
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

  private _setScheduleFormModel(model: ScheduleForm): void {

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

    this._createService
        .create(this._loadForm(schedule), this.event)
        .subscribe(
          response => {

          }
          //TODO HERE
        );

  }

  public delete(schedule: Schedule): void {

    this._deleteService.delete(schedule, this.event);
    this._modalService.dismissAll('Cross click');

  }

  private _update(schedule: any): void {

    this._updateService
        .update(this._loadForm(schedule), this.event)
        .subscribe(
          response => {
            //TODO HERE
          }
        );

  }

  private _populateActivities(): void {

    this.activitiesArray = this._activityFindService
                                .list(this.event);

  }

  private _loadForm(data: any): Schedule {

    return {
      "id": data.id ? data.id : '',
      "activity": {id: data.activity ? data.activity : ''},
      "date": data.date ? data.date : '',
      "startTime": data.startTime ? data.startTime : '',
      "endTime": data.endTime ? data.endTime : ''
    };

  }

}
