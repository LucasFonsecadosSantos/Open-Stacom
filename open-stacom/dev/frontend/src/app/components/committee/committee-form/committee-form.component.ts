import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Operation } from 'src/app/enums';
import { Committee, CommitteeForm, Template, Event, Person } from 'src/app/models';
import { CommitteCreateService, CommitteDeleteService, CommitteUpdateService } from 'src/app/services/committee';
import { PersonFindService } from 'src/app/services/person';
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

  public committeeMembers: Array<Person>;

  public personArray: Person[];

  public committee: Committee;

  public committeeFormModel: CommitteeForm;

  public static readonly operation: Operation;

  constructor(
    private _modalService: NgbModal,
    private _formService: CommitteeFormService,
    private _createService: CommitteCreateService,
    private _updateService: CommitteUpdateService,
    private _deleteService: CommitteDeleteService,
    private _personFindService: PersonFindService
  ) { }

  ngOnInit(): void {

    this.personArray = new Array<Person>();
    this._getFormObservables();

  }


  private _buildAvailablePeopleToSelect(): void {

    this._personFindService
        .list(this.event.id)
        .subscribe(
          response => this._buildPeopleSelectField(response)
        );

  }

  private _buildPeopleSelectField(personArray: Person[]): void {

    this.personArray
        .filter(
          person => !this.committee.members.includes(person)
        );

  }

  private _getFormObservables(): void {

    this._formService
        .getObservable()
        .subscribe(
          data => {
            this._setCommittee(data.committee, data.operation);
            this._setCommitteeFormModel(data);
            this._buildAvailablePeopleToSelect();
            this._launchModal();
          }
        );

  }

  public addMember(personID: string): void {

    this._personFindService
          .find(personID)
          .subscribe(
            response => {
              this.committee.members.push(response);
              this.personArray = this._removePersonFromOptions(personID);
            }
          );

  }

  public get operationUpdate() {
    return Operation.Update;
  }

  public get operationCreate() {
    return Operation.Create;
  }

  private _removePersonFromOptions(personID: string): Person[] {

    return this.personArray.filter(person => person.id != personID);

  }

  private _setCommittee(committee: Committee, operation: Operation): void {

    this.committee = (operation == Operation.Update) ? committee : this._getNewCommittee();

  }

  private _getNewCommittee(): Committee {

    return {
      id: null,
      brief: null,
      email: null,
      members: [],
      picture: null,
      telephone: null
    };

  }

  private _setCommitteeFormModel(model: CommitteeForm): void {

    this.committeeFormModel = model;

  }

  private _launchModal(): void {

    if (!this._modalService.hasOpenModals()) {

      this._modalService.open(this.committeForm,
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
