import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Operation } from 'src/app/enums';
import { Committee, Template, Event, Person, Webpage } from 'src/app/models';
import { FormModel } from 'src/app/models/form-model.model';
import { CommitteCreateService, CommitteDeleteService, CommitteUpdateService } from 'src/app/services/committee';
import { PersonFindService } from 'src/app/services/person';
import { TemplateObjectValidatorService } from 'src/app/services/utils';
import { CommitteeFormService } from '.';

@Component({
  selector: 'app-committee-form',
  templateUrl: './committee-form.component.html',
  styleUrls: ['./committee-form.component.scss']
})
export class CommitteeFormComponent implements OnInit {

  @ViewChild('committeeForm')
  public committeeForm: CommitteeFormComponent;

  @Input()
  public webpage: Webpage;

  public committeeMembers: Array<Person>;

  public personArray: Person[];

  public committeeTmp: any[];

  public committee: Committee;

  public committeeFormModel: FormModel;

  public static readonly operation: Operation;

  constructor(
    private _modalService: NgbModal,
    private toastr: ToastrService,
    private _formService: CommitteeFormService,
    private _validatorService: TemplateObjectValidatorService,
    private _createService: CommitteCreateService,
    private _updateService: CommitteUpdateService,
    private _deleteService: CommitteDeleteService,
    private _personFindService: PersonFindService
  ) { }

  ngOnInit(): void {

    this.personArray = new Array<Person>();
    this._getFormObservables();
    this._buildAvailablePeopleToSelect();

  }


  private _buildAvailablePeopleToSelect(): void {

    this.personArray = this._personFindService
                            .list(this.webpage);

  }

  private _getFormObservables(): void {

    this._formService
        .getObservable()
        .subscribe(
          data => {
            this._setCommittee(data.model, data.operation);
            this._setCommitteeFormModel(data);
            this._launchModal();
          }
        );

  }

  public addMember(personID: string): void {

    let newMember: Person = this._personFindService
                            .find(personID, this.webpage)

    this.committee.members.push(newMember);
    this.committeeTmp.push({'id': newMember.id});
    this.personArray = this._removePersonFromOptions(personID);


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
      'id': '',
      'brief': '',
      'email': '',
      'members': [],
      'picture': '',
      'telephone': ''
    };

  }

  private _setCommitteeFormModel(model: FormModel): void {

    this.committeeFormModel = model;

  }

  private _launchModal(): void {
    this.committeeTmp = [];
    if (!this._modalService.hasOpenModals()) {

      this._modalService.open(this.committeeForm,
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

  public createOrUpdate(committee: Committee): void {

    if (committee.id) {
      this._update(committee);
    } else {
      this._create(committee);
    }

  }

  private _create(committee: Committee): void {

    try {
      this._validatorService.validate(this.webpage.template.objects.committee, committee);
      this._createService
        .create(this._loadForm(committee), this.webpage)
        .subscribe({

          next: response => {

            this._showSuccessToast(
              `O comitê ${committee.name} foi criado com sucesso.`
            );

          },
          error: exception => {

            this._showErrorToast(
              `Ops: Parece que houve um erro ao se criar o comitê ${committee.name}. ERRO: ${exception}`
            );

          }

        });

      } catch(exception) {
        this._showErrorToast(
          `Ops: Parece que houve um erro ao validar as informações do comitê ${committee.name}. ERRO: ${exception}`
        );
      }

  }

  public delete(committee: Committee): void {

    this._deleteService.delete(committee, this.webpage);
    this._modalService.dismissAll('Cross click');

  }

  private _showSuccessToast(message: string): void {

    this.toastr.success(`<span class="tim-icons icon-check-2" [data-notify]="icon"></span> ${message}`, '', {
      disableTimeOut: false,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-success alert-with-icon",
      positionClass: 'toast-top-center'
    });

  }

  private _showErrorToast(message: string): void {

    this.toastr.error(`<span class="tim-icons icon-check-2" [data-notify]="icon"></span> ${message}`, '', {
      disableTimeOut: false,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-error alert-with-icon",
      positionClass: 'toast-top-center'
    });

  }

  private _loadForm(data: any): Committee {

    return {
      "id": data.id ? data.id : '',
      "name": data.name ? data.name : '',
      "members": this.committeeTmp ? this.committeeTmp : [],
      "picture": data.picture ? data.picture : '',
      "brief": data.brief ? data.brief : '',
      "telephone": data.telephone ? data.telephone : '',
      "email": data.email ? data.email : ''
    };

  }

  private _update(committee: Committee): void {

    try {
      this._validatorService.validate(this.webpage.template.objects.committee, committee);
      this._updateService
        .update(this._loadForm(committee), this.webpage)
        .subscribe({

          next: response => {

            this._showSuccessToast(
              `O comitê ${committee.name} foi atualizada com sucesso.`
            );

          },
          error: exception => {

            this._showErrorToast(
              `Ops: Parece que houve um erro ao se atualizar o comitê ${committee.name}. ERRO: ${exception}`
            );

          }

        });

    } catch(exception) {
      this._showErrorToast(
        `Ops: Parece que houve um erro ao validar as informações do comitê ${committee.name}. ERRO: ${exception}`
      );
    }

  }

}
