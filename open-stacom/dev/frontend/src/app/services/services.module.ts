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
    ActivityListService
  ]
})
export class ServicesModule { }
