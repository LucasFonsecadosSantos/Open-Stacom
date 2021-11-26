import { Injectable } from '@angular/core';

import { ConfirmDialog } from './../../../models';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  private subject:          Subject<any> = new Subject<any>();
  private subjectResponse:  Subject<any> = new Subject<any>();

  public confirmDialog: ConfirmDialog;

  constructor(
  ) { }

  public launchConfirmDialog(confirmDialogModel: ConfirmDialog) {
    this.subject.next(confirmDialogModel);
  }

  public acceptOperation(): void {
    this.subjectResponse.next(true);
  }

  public getObservable(): Observable<any> {
    return this.subject.asObservable();
  }

  public getResponseObservable(): Observable<any> {
    return this.subjectResponse.asObservable();
  }

}
