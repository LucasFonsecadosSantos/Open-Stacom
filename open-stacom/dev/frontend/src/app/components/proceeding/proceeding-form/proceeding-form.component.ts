import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Operation } from 'src/app/enums';
import { Template, Event, Proceeding } from 'src/app/models';
import { FormModel } from 'src/app/models/form-model.model';
import { ProceedingCreateService, ProceedingUpdateService } from 'src/app/services/proceeding';
import { TemplateObjectValidatorService } from 'src/app/services/utils';
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

  public proceeding: Proceeding;

  public proceedingFormModel: FormModel;

  public static readonly operation: Operation;

  constructor(
    private _modalService: NgbModal,
    private toastr: ToastrService,
    private _validatorService: TemplateObjectValidatorService,
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

            this._setProceeding(data.model, data.operation);
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

  private _setProceedingFormModel(model: FormModel): void {

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

  private _create(proceeding: Proceeding): void {

    try {
      this._validatorService.validate(this.event.template.objects.proceeding, proceeding);
      this._createService
        .create(this._loadForm(proceeding), this.event)
        .subscribe({

          next: response => {

            this._showSuccessToast(
              `${proceeding.title} foi adicionado com sucesso.`
            );

          },
          error: exception => {

            this._showErrorToast(
              `Ops: Parece que houve um erro ao adicionar ${proceeding.title}. ERRO: ${exception}`
            );

          }

        });
    
    } catch(exception) {
      this._showErrorToast(
        `Ops: Parece que houve um erro ao validar as informações de ${proceeding.title}. ERRO: ${exception}`
      );
    }
  }

  private _update(proceeding: Proceeding): void {

    try {
      this._validatorService.validate(this.event.template.objects.proceeding, proceeding);
      this._updateService
        .update(this._loadForm(proceeding), this.event)
        .subscribe({

          next: response => {

            this._showSuccessToast(
              `${proceeding.title} foi atualizada com sucesso.`
            );

          },
          error: exception => {

            this._showErrorToast(
              `Ops: Parece que houve um erro ao se atualizar ${proceeding.title}. ERRO: ${exception}`
            );

          }

        });
    
    } catch(exception) {
      this._showErrorToast(
        `Ops: Parece que houve um erro ao validar as informações de ${proceeding.title}. ERRO: ${exception}`
      );
    }

  }

  public delete(proceeding: Proceeding): void {}

  public createOrUpdate(proceeding: Proceeding): void {

    if (proceeding.id) {
      this._update(proceeding);
    } else {
      this._create(proceeding);
    }

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

  private _loadForm(data: any): Proceeding {

    return {
      "id": data.id ? data.id : '',
      "title": data.title ? data.title : '',
      "file": data.file ? data.file : '',
      "specialty": data.specialty ? data.specialty : '',
      "author": data.author ? data.author : '',
      "code": data.code ? data.code : '',
      }
    };

}
