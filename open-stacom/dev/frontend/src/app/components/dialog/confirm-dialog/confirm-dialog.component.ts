import { ConfirmDialog } from './../../../models/confirm-dialog.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogService } from './confirm-dialog.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  @ViewChild('dialog') dialog;
  public confirmDialogModel: ConfirmDialog

  constructor(
    private _confirmDialogService: ConfirmDialogService,
    private _modalService: NgbModal
  ) { }

  ngOnInit(): void {

    this._confirmDialogService

          .getObservable()

          .subscribe(data => {
            this.confirmDialogModel = data;
            this._launchDialog();
          });

  }

  public acceptButton(): void {

    this._confirmDialogService.acceptOperation();

  }

  private _launchDialog(): void {

    this._modalService.open(this.dialog,
      {
        ariaLabelledBy: 'modal-basic-title',
        windowClass: 'modal-custom',
        size: 'md',
        centered: true,
        // modalDialogClass: 'modal-dialog-custom'

      }
    );

  }


}
