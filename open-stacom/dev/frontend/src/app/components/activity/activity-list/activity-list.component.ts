import { Component, Input, OnInit } from '@angular/core';
import { Operation } from 'src/app/enums';
import { Activity, Event } from 'src/app/models';
import { SharedActivityService } from 'src/app/pages';
import { ActivityFindService } from 'src/app/services/activity';
import { ActivityFormService } from '..';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  @Input()
  public event: Event;

  public activityArray: Activity[];

  constructor(
    private _findService: ActivityFindService,
    private _sharedActivityService: SharedActivityService,
    private _activityFormService: ActivityFormService
  ) { }

  ngOnInit(): void {

    this._fetchActivities();

  }

  private _fetchActivities(): void {

    this.activityArray = this._findService
                              .list(this.event);

  }

  public selectActivity(activity: Activity): void {

    this._sharedActivityService
        .sharedActivityFromListToInfo(activity);

  }

  public editActivity(activity: Activity): void {

    this._activityFormService.launchModal({
      operation: Operation.Update,
      activity: activity
    });

  }

}
