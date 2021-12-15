import { PersonUpdateService } from './../../../services/person/person-update.service';
import { PersonForm } from './../../../models/person-form.model';
import { PersonFormService } from './person-form.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { getAllStates, getAllCities, getStateCities } from 'easy-location-br';
import { PersonCreateService, PersonDeleteService } from './../../../services/person';
import {
  Person,
  Template,
  Event
} from './../../../models';
import {
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { Operation } from 'src/app/enums';
import { CepService } from 'src/app/services/utils';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

  @ViewChild('personForm')
  public personForm: PersonFormComponent;

  public personFormModel: PersonForm;

  @Input()
  public template: Template;

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
    private _personUpdateService: PersonUpdateService
  ) { }

  ngOnInit(): void {

    this.states = getAllStates();
    this._getFormObservables();

  }

  private _getFormObservables(): void {

    this._personFormService
          .getObservable()
          .subscribe(data => {

            this._setPerson(data.person, data.operation);
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
      "socialNetworks": null
    }

  }

  private _setPersonFormModel(model: PersonForm): void {

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

    this._personCreateService
          .create(this._loadForm(person), this.event)
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

  }

  private _update(person: Person): void {

    this._personUpdateService
        .update(this._loadForm(person), this.event)
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
      "socialNetworks": {
        "facebook": data.socialNetworkFacebook ? data.socialNetworkFacebook : '',
        "twitter": data.socialNetworkTwitter ? data.socialNetworkTwitter : '',
        "github": data.socialNetworkGithub ? data.socialNetworkGithub : '',
        "linkedin": data.socialNetworkLinkedin ? data.socialNetworkLinkedin : '',
        "spotify": data.socialNetworkSpotify ? data.socialNetworkSpotify : '',
        "whatsapp": data.socialNetworkWhatssapp ? data.socialNetworkWhatssapp : '',
        "behance": data.socialNetworkBehance ? data.socialNetworkBehance : '',
        "youtubeChannel": data.socialNetworkYoutubeChannel ? data.socialNetworkYoutubeChannel : '',
        "email": data.socialNetworkEmail ? data.socialNetworkEmail : ''
      }
    };

  }

}
