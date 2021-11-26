import { ServicesModule } from './../../services/services.module';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WelcomeLayoutComponent } from './welcome-layout.component';

import { ComponentsModule } from 'src/app/components';

import {
  LoadProjectComponent,
  NewProjectComponent,
  WelcomeCardComponent
} from './components';



@NgModule({
  declarations: [
    WelcomeLayoutComponent,
    NewProjectComponent,
    LoadProjectComponent,
    WelcomeCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(WelcomeRoutingModule),
    ComponentsModule,
    ServicesModule
  ],
  exports: [
    WelcomeLayoutComponent
  ],
})
export class WelcomeLayoutModule { }
