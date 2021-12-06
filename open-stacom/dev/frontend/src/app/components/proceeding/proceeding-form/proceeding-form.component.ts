import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Operation } from 'src/app/enums';
import { Template, Event, Proceeding, ProceedingForm } from 'src/app/models';
import { ProceedingCreateService, ProceedingUpdateService } from 'src/app/services/proceeding';
import { ProceedingFormService } from '.';

@Component({
  selector: 'app-proceeding-form',
  templateUrl: './proceeding-form.component.html',
  styleUrls: ['./proceeding-form.component.scss']
})
export class ProceedingFormComponent implements OnInit {

  @ViewChild('proceedingForm')
  public proceedingForm: ProceedingFormComponent;

  @Input()
  public event: Event;

  @Input()
  public template: Template;

  public proceeding: Proceeding;

  public proceedingFormModel: ProceedingForm;

  public static readonly operation: Operation;

  constructor(
    private _modalService: NgbModal,
    private _formService: ProceedingFormService,
    private _createService: ProceedingCreateService,
    private _updateService: ProceedingUpdateService,
  ) { }

  ngOnInit(): void {

    this._getFormObservables();

  }

  private _getFormObservables(): void {

    this._formService
          .getObservable()
          .subscribe(data => {

            this._setProceeding(data.proceeding, data.operation);
            this._setProceedingFormModel(data);
            this._launchModal();
            // this._buildFormFields();

          });

  }

  public get operationUpdate() {
    return Operation.Update;
  }

  public get operationCreate() {
    return Operation.Create;
  }

  private _setProceeding(proceeding: Proceeding, operation: Operation): void {

    this.proceeding = (operation == Operation.Update) ? proceeding : this._getNewProceeding();

  }

  private _getNewProceeding(): Proceeding {

    return {
      "id": null,
      "title": null,
      "code": null,
      "author": null,
      "specialty": null,
      "file": null
    }

  }

  private _setProceedingFormModel(model: ProceedingForm): void {

    this.proceedingFormModel = model;

  }

  private _launchModal(): void {

    if (!this._modalService.hasOpenModals()) {

      this._modalService.open(this.proceedingForm,
        {
          ariaLabelledBy: 'modal-basic-title',
          windowClass: 'modal-custom',
          size: 'lg',
          centered: true,
          modalDialogClass: 'modal-dialog-custom'
        }
      );

    }

  }

  private create(proceeding: Proceeding): void {

    this._createService
        .create(proceeding)
        .subscribe(response => {
          //TODO Here - IMplements a toast with message
        });

  }

  private update(proceeding: Proceeding): void {

    this._updateService
        .update(proceeding)
        .subscribe(response => {
          //TODO Here - implement a toast with message
        });

  }
}
