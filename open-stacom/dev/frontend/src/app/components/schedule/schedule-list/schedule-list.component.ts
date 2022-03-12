import { Component, Input, OnInit } from '@angular/core';
import { Operation } from 'src/app/enums';
import { Event, Template, Webpage } from 'src/app/models';
import { Schedule } from 'src/app/models/schedule.model';
import { ScheduleFindService } from 'src/app/services/schedule';
import { ScheduleFormService } from '..';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {

  @Input()
  public webpage: Webpage;

  public event: Event;

  public scheduleArray: Schedule[];

  public currentDateListation: string;

  public isScheduleLoaded: boolean = false;

  constructor(
    private _findService: ScheduleFindService,
    private _formService: ScheduleFormService
  ) { }

  ngOnInit(): void {

    this._fetchSchedule();
    this.event = this.webpage.template.objects.event.content;

  }

  public selectSchedule(schedule: Schedule): void {}

  public editSchedule(schedule: Schedule): void {

    this._formService
        .launchModal(
          {
            operation: Operation.Update,
            model: schedule
          }
        );

  }

  private _fetchSchedule(): void {

    this.scheduleArray = this._findService.list(this.webpage);
    this.isScheduleLoaded = true;

  }

  public getScheduleOfDate(day: Date): Schedule[] {

    return this.scheduleArray ? this.scheduleArray.filter(schedule => (schedule.date == day)) : [];

  }

  public getColumSize(): string {

    if (this.event.days.length % 4 == 0) {
      return "col-md-3 px-md-1";
    } else if (this.event.days.length % 3 == 0) {
      return "col-md-4 px-md-1";
    } else if (this.event.days.length % 2 == 0) {
      return "col-md-6 px-md-1";
    } else {
      return "col-md-3 px-md-1";
    }

  }

}
