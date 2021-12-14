import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from "@angular/router";
import {
  NewProjectComponent,
  LoadProjectComponent,
  WelcomeCardComponent,
  CadastreEventComponent
} from './components/';

export const WelcomeRoutingModule: Routes = [
  { path: "novo", component: NewProjectComponent },
  { path: "new", component: NewProjectComponent },
  { path: "carregar", component: LoadProjectComponent },
  { path: "load", component: LoadProjectComponent },
  { path: "open", component: LoadProjectComponent },
  { path: "abrir", component: LoadProjectComponent },
  { path: "pre-carregar/:eventID", component: CadastreEventComponent },
  { path: "", component: WelcomeCardComponent }
];
