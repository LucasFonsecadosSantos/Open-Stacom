import { Component, Input, OnInit } from '@angular/core';
import {
  Template,
  Event,
  PreviousEdition,
  Webpage
} from './../../../models';
import {
  PreviousEditionCreateService,
  PreviousEditionUpdateService
} from 'src/app/services/previous-edition';
import { Operation } from 'src/app/enums';
import { PreviousEditionFormService } from '.';
import { ToastrService } from 'ngx-toastr';
import { FormModel } from 'src/app/models/form-model.model';
import { TemplateObjectValidatorService } from 'src/app/services/utils';

@Component({
  selector: 'app-previous-edition-form',
  templateUrl: './previous-edition-form.component.html',
  styleUrls: ['./previous-edition-form.component.scss']
})
export class PreviousEditionFormComponent implements OnInit {

  // @ViewChild('previousEdition') previousEdition;
  // public previousEditionFormModel: PreviousEditionForm;

  @Input()
  public webpage: Webpage;

  public edition: PreviousEdition;

  public previousEditionFormModel: FormModel;

  public static readonly operation: Operation;

  constructor(
    private _createService: PreviousEditionCreateService,
    private _updateService: PreviousEditionUpdateService,
    private _validatorService: TemplateObjectValidatorService,
    private toastr: ToastrService,
    private _formService: PreviousEditionFormService
  ) { }

  ngOnInit(): void {

    this.edition = this._getNewEdition();
    this.previousEditionFormModel = { title: 'Registrar uma edição passada', operation: Operation.Create};
    this._initForm();
    this._getFormObservables();
  }

  private _initForm(): void {
    this.previousEditionFormModel = {
      title: 'Registrar uma edição passada do evento',
      operation: Operation.Create
    }
  }

  private _getFormObservables(): void {

    this._formService
          .getObservable()
          .subscribe(data => {

            this._setEdition(data.model, data.operation);
            this._setEditionFormModel(data);

          });

  }

  private _setEditionFormModel(model: FormModel): void {

    if (model) {
      this.previousEditionFormModel = model;
    } else {
      this.previousEditionFormModel = { title: 'Registrar uma edição passada', operation: Operation.Create};
    }

  }

  private _setEdition(edition: PreviousEdition, operation: Operation): void {

    this.edition = (operation == Operation.Update) ? edition : this._getNewEdition();

  }

  private _getNewEdition(): PreviousEdition {

    return {
      'id': null,
      'date': null,
      'link': null,
      'logo': null,
      'name': null
    }

  }

  public get operationUpdate() {
    return Operation.Update;
  }

  public get operationCreate() {
    return Operation.Create;
  }

  public createOrUpdate(edition: PreviousEdition): void {

    if (edition.id && edition.id != null && edition.id != "") {
      this._update(edition);
    } else {
      this._create(edition);
    }

  }

  private _create(edition: PreviousEdition): void {

    try {
      this._validatorService.validate(this.webpage.template.objects.pastEdition, edition);
      this._createService
          .create(this._loadForm(edition), this.webpage)
          .subscribe({

            next: response => {

              this._showSuccessToast(
                `${edition.name} foi adicionado com sucesso.`
              );

            },
            error: exception => {

              this._showErrorToast(
                `Ops: Parece que houve um erro ao adicionar ${edition.name}. ERRO: ${exception}`
              );

            }

          });
      } catch(exception) {
        this._showErrorToast(
          `Ops: Parece que houve um erro ao validar as informações da edição ${edition.name}. ERRO: ${exception}`
        );
      }

  }

  private _update(edition: PreviousEdition): void {

    try {
      this._validatorService.validate(this.webpage.template.objects.pastEdition, edition);
      this._updateService
          .update(this._loadForm(edition), this.webpage)
          .subscribe({

            next: response => {

              this._showSuccessToast(
                `${edition.name} foi atualizada com sucesso.`
              );

            },
            error: exception => {

              this._showErrorToast(
                `Ops: Parece que houve um erro ao se atualizar ${edition.name}. ERRO: ${exception}`
              );

            }

          });
      } catch(exception) {
        this._showErrorToast(
          `Ops: Parece que houve um erro ao validar as informações de ${edition.name}. ERRO: ${exception}`
        );
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

  private _loadForm(data: any): PreviousEdition {

    return {
      "id": data.id ? data.id : '',
      "name": data.name ? data.name : '',
      "logo": data.logo ? data.logo : '',
      "date": data.date ? data.date : '',
      "link": data.link ? data.link : '',
      }
    };

}
