import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Operation } from 'src/app/enums';
import { Committee, CommitteeForm, Template, Event } from 'src/app/models';
import { CommitteCreateService, CommitteDeleteService, CommitteUpdateService } from 'src/app/services/committee';
import { CommitteeFormService } from '.';

@Component({
  selector: 'app-committee-form',
  templateUrl: './committee-form.component.html',
  styleUrls: ['./committee-form.component.scss']
})
export class CommitteeFormComponent implements OnInit {

  @ViewChild('committeForm')
  public committeForm: CommitteeFormComponent;

  @Input()
  public event: Event;

  @Input()
  public template: Template;

  public committee: Committee;

  public committeeFormModel: CommitteeForm;

  public static readonly operation: Operation;

  constructor(
    private _modalService: NgbModal,
    private _formService: CommitteeFormService,
    private _createService: CommitteCreateService,
    private _updateService: CommitteUpdateService,
    private _deleteService: CommitteDeleteService,
  ) { }

  ngOnInit(): void {
    this._getFormObservables();

  }

  private _getFormObservables(): void {

    this._formService
          .getObservable()
          .subscribe(data => {

            this._setCommittee(data.committee, data.operation);
            this._setCommitteeFormModel(data);
            this._launchModal();

          });

  }

  public get operationUpdate() {
    return Operation.Update;
  }

  public get operationCreate() {
    return Operation.Create;
  }

  private _setCommittee(committee: Committee, operation: Operation): void {

    this.committee = (operation == Operation.Update) ? committee : null;

  }

  private _setCommitteeFormModel(model: CommitteeForm): void {

    this.committeeFormModel = model;

  }

  private _launchModal(): void {

    this._modalService.open(this.committeForm,
      {
        ariaLabelledBy: 'modal-basic-title',
        windowClass: 'modal-custom',
        size: 'lg',
        centered: true,
        modalDialogClass: 'modal-dialog-custom'
      }
    )

  }

  public create(committee: Committee): void {

    this._createService
          .create(committee)
          .subscribe(
            //TODO toas here
          );

  }

  public delete(committee: Committee): void {

    this._deleteService
          .delete(committee)
          .subscribe(
            //TODO toas here
          );

  }

  public update(committee: Committee): void {

    this._updateService
          .update(committee)
          .subscribe(
            //TODO toas here
          );

  }

}
