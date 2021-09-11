import {
  PersonCreateService,
  PersonDeleteService,
  PersonFindService,
  PersonListService
} from './person';

import {
  ActivityFindService,
  ActivityListService,
  ActivityDeleteService,
  ActivityCreateService
} from './activity';

import {
  ScheduleFindService,
  ScheduleListService,
  ScheduleDeleteService,
  ScheduleCreateService
} from './schedule';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PersonListService,
    PersonFindService,
    PersonDeleteService,
    PersonCreateService,

    ActivityCreateService,
    ActivityDeleteService,
    ActivityFindService,
    ActivityListService,

    ScheduleFindService,
    ScheduleListService,
    ScheduleDeleteService,
    ScheduleCreateService
  ]
})
export class ServicesModule { }
