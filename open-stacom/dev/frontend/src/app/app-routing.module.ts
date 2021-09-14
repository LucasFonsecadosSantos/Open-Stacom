
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import {
  AdminLayoutComponent,
  AuthLayoutComponent,
  WelcomeLayoutComponent
} from './layouts';


const routes: Routes = [
  {
    path: "",
    component: WelcomeLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import ("./layouts/welcome-layout").then(m => m.WelcomeLayoutModule)
      }
    ]
  },
  {
    path: "inicio",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import ("./layouts/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule)
      }
    ]
  },
  // {
  //   path: "",
  //   component: WelcomeLayoutComponent,
  //   children: [
  //     {
  //       path: "",
  //       loadChildren: () => import ("./layouts/welcome-layout/welcome-layout.module").then(m => m.WelcomeLayoutModule)
  //     }
  //   ]
  // },
  // {
  //   path: "",
  //   component: AuthLayoutComponent,
  //   children: [
  //     {
  //       path: "",
  //       loadChildren: () => import ("./layouts/auth-layout/auth-layout.module").then(m => m.AuthLayoutModule)
  //     }
  //   ]
  // },
  // {
  //   path: "inicio",
  //   component: AdminLayoutComponent,
  //   children: [
  //     {
  //       path: "",
  //       loadChildren: () => import ("./layouts/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule)
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
