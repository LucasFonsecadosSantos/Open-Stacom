import { Injectable } from '@angular/core';

import { ConfirmDialog } from './../../../models';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  private subject: Subject<any> = new Subject<any>();

  public confirmDialog: ConfirmDialog;

  constructor(
  ) { }

  public open(confirmDialogModel: ConfirmDialog): void {

    this.confirmDialog = confirmDialogModel;

  }

  public launchConfirmDialog(confirmDialogModel: ConfirmDialog) {
    this.subject.next(confirmDialogModel);
  }

  public getObservable(): Observable<any> {
    return this.subject.asObservable();
  }
}
