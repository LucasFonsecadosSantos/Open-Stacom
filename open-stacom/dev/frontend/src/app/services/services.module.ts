import {
  PersonCreateService,
  PersonDeleteService,
  PersonFindService,
  PersonListService } from './person';
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
    PersonCreateService
  ]
})
export class ServicesModule { }
