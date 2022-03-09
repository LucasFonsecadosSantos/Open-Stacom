import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Operation } from 'src/app/enums';
import { SponsorshipPlan } from 'src/app/enums/sponsorship-plan.enum';
import { Event, Webpage } from 'src/app/models';
import { Sponsor } from 'src/app/models/sponsor.model';
import { SponsorCreateService, SponsorDeleteService, SponsorUpdateService } from 'src/app/services/sponsor';
import { CepService, TemplateObjectValidatorService } from 'src/app/services/utils';
import { SponsorFormService } from './sponsor-form.service';
import { getAllStates, getAllCities, getStateCities } from 'easy-location-br';
import { ToastrService } from 'ngx-toastr';
import { FormModel } from 'src/app/models/form-model.model';

@Component({
  selector: 'app-sponsor-form',
  templateUrl: './sponsor-form.component.html',
  styleUrls: ['./sponsor-form.component.scss']
})
export class SponsorFormComponent implements OnInit {

  @ViewChild('sponsorForm')
  public sponsorForm: SponsorFormComponent;

  @Input()
  public webpage: Webpage;

  public sponsor: Sponsor;

  public sponsorFormModel: FormModel;

  public states: any;

  public static readonly operation: Operation;

  constructor(
    private _modalService: NgbModal,
    private _cepService: CepService,
    private _formService: SponsorFormService,
    private toastr: ToastrService,
    private _validatorService: TemplateObjectValidatorService,
    private _createService: SponsorCreateService,
    private _deleteService: SponsorDeleteService,
    private _updateService: SponsorUpdateService
  ) { }

  ngOnInit(): void {

    this.states = getAllStates();
    this._getFormObservables();

  }


  private _getFormObservables(): void {

    this._formService
          .getObservable()
          .subscribe(data => {
            this._setSponsor(data.model, data.operation);
            this._setSponsorFormModel(data);
            this._launchModal();
          });

  }

  public get operationUpdate() {
    return Operation.Update;
  }

  public get operationCreate() {
    return Operation.Create;
  }

  public get possibleSponsorPlans() {
    return Object.keys(SponsorshipPlan).filter(key => !isNaN(Number(SponsorshipPlan[key])));
  }

  private _setSponsor(sponsor: Sponsor, operation: Operation): void {

    this.sponsor = (operation == Operation.Update) ? sponsor : this._getNewSponsor();

  }

  private _getNewSponsor(): Sponsor {

    return {
      "id": '',
      "name": '',
      "picture": '',
      "telephone": '',
      "email": '',
      "website": '',
      "sponsorshipPlan": null,
      "brief": '',
      "locationCep": '',
      "locationAddress": '',
      "locationNeiborhood": '',
      "locationNumber": '',
      "locationUF": '',
      "locationCountry": ''
    }

  }

  public fetchCEPInformations(cep: string): void {

    if (this.sponsor) {

    this._cepService
          .fetchInformationFromCEP(cep)
          .subscribe(
            response => {
              this.sponsor.locationCep = response.cep,
              this.sponsor.locationCity = response.localidade,
              this.sponsor.locationAddress = response.logradouro,
              this.sponsor.locationUF = response.uf,
              this.sponsor.locationNeiborhood = response.bairro,
              this.sponsor.locationCountry = "Brasil"
            }
          );
      }

  }

  public uploadPicture(): void {}

  private _setSponsorFormModel(model: FormModel): void {

    this.sponsorFormModel = model;

  }

  private _launchModal(): void {

    if (!this._modalService.hasOpenModals()) {

      this._modalService.open(this.sponsorForm,
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

  public delete(sponsor: Sponsor): void {

    this._deleteService.delete(sponsor, this.webpage);
    this._modalService.dismissAll('Cross click');

  }

  public createOrUpdate(data: any) {

    if (this.sponsor && this.sponsor.id && this.sponsor.id != null && this.sponsor.id != '') {
      this._update(data);
    } else {
      this._create(data);
    }


  }

  public getCitiesFromState(state: string): any {

    return this.getCitiesFromState(state);

  }


  private _loadForm(data: any): Sponsor {

    return {
      "id": data.id ? data.id : '',
      "name": data.name ? data.name : '',
      // "picture": data.picture ? data.picture : '',
      "brief": data.brief ? data.brief : '',
      "website": data.website ? data.website : '',
      "email": data.email ? data.email : '',
      "telephone": data.telephone ? data.telephone : '',
      "locationCep": data.locationCep ? data.locationCep : '',
      "locationAddress": data.locationAddress ? data.locationAddress : '',
      "locationNumber": data.locationNumber ? data.locationNumber : '',
      "locationNeiborhood": data.locationNeiborhood ? data.locationNeiborhood : '',
      "locationCity": data.locationCity ? data.locationCity : '',
      "locationUF": data.locationUF ? data.locationUF : '',
      "locationCountry": data.locationCountry ? data.locationCountry : '',
      "sponsorshipPlan": data.sponsorshipPlan ? data.sponsorshipPlan : ''
    };

  }

  private _update(sponsor: Sponsor): void {

    try {
      this._validatorService.validate(this.webpage.template.objects.sponsor, this._loadForm(sponsor));
      this._updateService
        .update(this._loadForm(sponsor), this.webpage)
        .subscribe({

          next: response => {

            this._showSuccessToast(
              `O patrocinador ${sponsor.name} foi atualizado com sucesso.`
            );

          },
          error: exception => {

            this._showErrorToast(
              `Ops: Parece que houve um erro ao se atualizar o patrocinador ${sponsor.name}. ERRO: ${exception}`
            );

          }

        });
    } catch(exception) {
      this._showErrorToast(
        `Ops: Parece que houve um erro ao validar as informações de ${sponsor.name}. ERRO: ${exception}`
      );
    }

  }

  private _create(data): void {
    try {
      this._validatorService.validate(this.webpage.template.objects.sponsor, this._loadForm(data));
      this._createService
        .create(this._loadForm(data), this.webpage)
        .subscribe({

          next: response => {

            this._showSuccessToast(
              `O patrocinador ${data.name} foi criado com sucesso.`
            );

          },
          error: exception => {

            this._showErrorToast(
              `Ops: Parece que houve um erro ao se criar o patrocinador ${data.name}. ERRO: ${exception}`
            );

          }

        });

    } catch(exception) {
      this._showErrorToast(
        `Ops: Parece que houve um erro ao validar as informações de ${data.name}. ERRO: ${exception}`
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

}
