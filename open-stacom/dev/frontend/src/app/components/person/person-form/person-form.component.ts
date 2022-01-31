import { PersonUpdateService } from './../../../services/person/person-update.service';
import { PersonFormService } from './person-form.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { getAllStates, getAllCities, getStateCities } from 'easy-location-br';
import { PersonCreateService, PersonDeleteService } from './../../../services/person';
import {
  Person,
  Template,
  Event,
  PersonTemplate
} from './../../../models';
import {
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { Operation } from 'src/app/enums';
import { CepService, TemplateObjectValidatorService } from 'src/app/services/utils';
import { ToastrService } from 'ngx-toastr';
import { FormModel } from 'src/app/models/form-model.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

  @ViewChild('personForm')
  public personForm: PersonFormComponent;

  public personFormModel: FormModel;

  @Input()
  public event: Event;

  public states: any;

  public person: Person;

  public static readonly operation: Operation;

  constructor(
    private _modalService: NgbModal,
    private _cepService: CepService,
    private toastr: ToastrService,
    private _deleteService: PersonDeleteService,
    private _personFormService: PersonFormService,
    private _personCreateService: PersonCreateService,
    private _personUpdateService: PersonUpdateService,
    private _validatorService: TemplateObjectValidatorService
  ) { }

  ngOnInit(): void {

    this.states = getAllStates();
    this._getFormObservables();

  }

  private _getFormObservables(): void {

    this._personFormService
          .getObservable()
          .subscribe(data => {

            this._setPerson(data.model, data.operation);
            this._setPersonFormModel(data);
            this._launchModal();

          });

  }

  public get operationUpdate() {
    return Operation.Update;
  }

  public get operationCreate() {
    return Operation.Create;
  }

  private _setPerson(person: Person, operation: Operation): void {

    this.person = (operation == Operation.Update) ? person : this._getNewPerson();

  }

  public fetchCEPInformations(cep: string): void {

    this._cepService
          .fetchInformationFromCEP(cep)
          .subscribe(
            response => {
              this.person.locationCep = response.cep,
              this.person.locationCity = response.localidade,
              this.person.locationAddress = response.logradouro,
              this.person.locationUF = response.uf,
              this.person.locationNeiborhood = response.bairro,
              this.person.locationCountry = 'Brasil'
            }
          );

  }

  private _getNewPerson(): Person {

    return {
      "id": null,
      "academicFormation": null,
      "avatar": null,
      "brief": null,
      "institution": null,
      "job": null,
      "locationCep": null,
      "locationAddress": null,
      "locationNumber": null,
      "locationNeiborhood": null,
      "locationCity": null,
      "locationUF": null,
      "locationCountry": null,
      "name": null,
      "socialNetworkFacebook": null,
      "socialNetworkTwitter": null,
      "socialNetworkGithub": null,
      "socialNetworkLinkedin": null,
      "socialNetworkSpotify": null,
      "socialNetworkWhatsapp": null,
      "socialNetworkBehance": null,
      "socialNetworkYoutubeChannel": null,
      "socialNetworkEmail": null,
      "socialNetworkWebsite": null
    }

  }

  private _setPersonFormModel(model: FormModel): void {

    this.personFormModel = model;

  }

  private _launchModal(): void {

    if (!this._modalService.hasOpenModals()) {

      this._modalService.open(this.personForm,
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

  public createOrUpdate(person: Person): void {

    if (person.id) {
      this._update(person);
    } else {
      this._create(person);
    }

  }

  private _create(person: Person): void {

    let buildedPerson: Person = this._loadForm(person);

    try {
      this._validatorService.validate(this.event.template.objects.person, person);
      this._personCreateService
          .create(buildedPerson, this.event)
          .subscribe({

            next: response => {

              this._showSuccessToast(
                `${person.name} foi adicionado com sucesso.`
              );

            },
            error: exception => {

              this._showErrorToast(
                `Ops: Parece que houve um erro ao adicionar ${person.name}. ERRO: ${exception}`
              );

            }

          });
    } catch(exception) {
      this._showErrorToast(
        `Ops: Parece que houve um erro ao validar as informações de ${person.name}. ERRO: ${exception}`
      );
    }

  }

  private _update(person: Person): void {

    let buildedPerson: Person = this._loadForm(person);

    try {
      
      this._validatorService.validate(this.event.template.objects.person, person);
      this._personUpdateService
      .update(buildedPerson, this.event)
      .subscribe({

        next: response => {

          this._showSuccessToast(
            `${person.name} foi atualizada com sucesso.`
          );

        },
        error: exception => {

          this._showErrorToast(
            `Ops: Parece que houve um erro ao se atualizar ${person.name}. ERRO: ${exception}`
          );

        }

      });
    
    
    } catch(exception) {
      this._showErrorToast(
        `Ops: Parece que houve um erro ao validar as informações de ${person.name}. ERRO: ${exception}`
      );
    }
    
      
  }

  public delete(person: Person): void {

    this._deleteService.delete(person, this.event);
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

  private _loadForm(data: any): Person {

    return {
      "id": data.id ? data.id : '',
      "name": data.name ? data.name : '',
      "avatar": data.avatar ? data.avatar : '',
      "brief": data.brief ? data.brief : '',
      "job": data.job ? data.job : '',
      "academicFormation": data.academicFormationdescription ? data.academicFormation : '',
      "institution": data.institution ? data.institution : '',
      "locationCep": data.locationCep ? data.locationCep : '',
      "locationAddress": data.locationAddress ? data.locationAddress : '',
      "locationNumber": data.locationNumber ? data.locationNumber : '',
      "locationNeiborhood": data.locationNeiborhood ? data.locationNeiborhood : '',
      "locationCity": data.locationCity ? data.locationCity : '',
      "locationUF": data.locationUF ? data.locationUF : '',
      "locationCountry": data.locationCountry ? data.locationCountry : '',
      "socialNetworkFacebook": data.socialNetworkFacebook ? data.socialNetworkFacebook : '',
      "socialNetworkTwitter": data.socialNetworkTwitter ? data.socialNetworkTwitter : '',
      "socialNetworkGithub": data.socialNetworkGithub ? data.socialNetworkGithub : '',
      "socialNetworkLinkedin": data.socialNetworkLinkedin ? data.socialNetworkLinkedin : '',
      "socialNetworkSpotify": data.socialNetworkSpotify ? data.socialNetworkSpotify : '',
      "socialNetworkWhatsapp": data.socialNetworkWhatssapp ? data.socialNetworkWhatssapp : '',
      "socialNetworkBehance": data.socialNetworkBehance ? data.socialNetworkBehance : '',
      "socialNetworkYoutubeChannel": data.socialNetworkYoutubeChannel ? data.socialNetworkYoutubeChannel : '',
      "socialNetworkEmail": data.socialNetworkEmail ? data.socialNetworkEmail : '',
      "socialNetworkWebsite": data.socialNetworkWebsite ? data.socialNetworkWebsite : ''

    };

  }

}
