import { Component, Input, OnInit } from '@angular/core';
import { Operation } from 'src/app/enums';
import { Activity, Event } from 'src/app/models';
import { SharedActivityService } from 'src/app/pages';
import { ActivityDeleteService } from 'src/app/services/activity';
import { ActivityFormService } from '..';
import { ConfirmDialogService } from '../../dialog';

@Component({
  selector: 'app-activity-info',
  templateUrl: './activity-info.component.html',
  styleUrls: ['./activity-info.component.scss']
})
export class ActivityInfoComponent implements OnInit {

  @Input()
  public event: Event;

  public activity: Activity;

  constructor(
    private _formService: ActivityFormService,
    private _confirmDialogService: ConfirmDialogService,
    private _deleteService: ActivityDeleteService,
    private _sharedService: SharedActivityService
  ) { }

  ngOnInit(): void {

    this._getResponseObservables();

  }

  public editActivity(activity: Activity): void {

    this._formService.launchModal({
      operation:  Operation.Update,
      model: activity
    });

  }

  public deletePerson(activity: Activity): void {

    this._confirmDialogService.launchConfirmDialog({
      title: 'Antes de prosseguit..'
    });

    // this._sharedEventService.getEventObservable().subscribe(
    //   eventResponse => this._personDeleteService.delete(person.id, eventResponse.id)

    // );

    this._deleteService.delete(activity, this.event);


  }

  private _getResponseObservables(): void {

    this._sharedService
        .getActivityFromListObservable()
        .subscribe(
          response => {
            this.activity = response ? response : null
          }
        );

  }

}
