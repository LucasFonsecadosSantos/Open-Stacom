import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService,
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

  private _create(proceeding: Proceeding): void {

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

  }

  private _update(proceeding: Proceeding): void {

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
