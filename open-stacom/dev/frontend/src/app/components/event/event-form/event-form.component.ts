import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { getAllStates, getAllCities, getStateCities } from 'easy-location-br';
import { ToastrService } from 'ngx-toastr';
import { EventCreateService, EventUpdateService } from 'src/app/services/event';
import { CepService } from 'src/app/services/utils';
import {
  Event,
  Template
} from './../../../models';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  @Input()
  public event: Event;

  @Input()
  public template: Template;

  public tmpTelephones;

  public tmpDays: Date[];

  public states: any;

  public eventType: any[];

  constructor(
    private _cepService: CepService,
    private _updateService: EventUpdateService,
    private _createService: EventCreateService,
    // private _deleteService: DeleteEventService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {

    this.states = getAllStates();
    this.tmpDays = [];
    this._setEventTypes();

  }

  public addTelephoneToList(contact: string, telephone: string): void {

      this.tmpTelephones.push(
        {
          "name": contact,
          "number": telephone
        }
      );

      this.event.telephones.push(
        {
          "name": contact,
          "number": telephone
        }
      );

  }

  public addDateToList(date: Date): void {

    this.tmpDays.push(date);
    this.event.days.push(date);

  }

  public getCitiesFromState(state: string): any {

    return this.getCitiesFromState(state);

  }

  public fetchCEPInformations(cep: string): void {

    this._cepService
          .fetchInformationFromCEP(cep)
          .subscribe(
            response => {
              this.event.locationCep = response.cep,
              this.event.locationCity = response.localidade,
              this.event.locationAddress = response.logradouro,
              this.event.locationUF = response.uf,
              this.event.locationNeiborhood = response.bairro,
              this.event.locationCountry = 'Brasil'
            }
          );

  }

  public createOrUpdate(event: Event): void {

    if (event.id) {
      this._update(event);
    } else {
      this._create(event);
    }

  }

  private _create(event: Event): void {

    this._createService
        .create(this.template)
        .subscribe({

          next: response => {

            this._showSuccessToast(
              `O evento ${event.name} foi criado com sucesso.`
            );

          },
          error: exception => {

            this._showErrorToast(
              `Ops: Parece que houve um erro ao se criar o evento ${event.name}. ERRO: ${exception}`
            );

          }

        });

  }

  private _update(event: Event): void {

    this._updateService
        .update(this._loadForm(event))
        .subscribe({

          next: response => {

            this._showSuccessToast(
              `O evento ${event.name} foi atualizado com sucesso.`
            );

          },
          error: exception => {

            this._showErrorToast(
              `Ops: Parece que houve um erro ao se atualizar o evento ${event.name}. ERRO: ${exception}`
            );

          }

        });

  }

  // public delete(event: Event): void {

  //   this._deleteService.delete(event);
  //   this._modalService.dismissAll('Cross click');

  // }

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

  private _setEventTypes(): void {
    this.eventType = [
      'Congresso',
      'Simpósio',
      'Encontro',
      'Ciclo de Eventos',
      'Palestra'
    ]
  }

  private _loadForm(data: any): Event {

    return {
      "id": data.id ? data.id : '',
      "name": data.name ? data.name : '',
      "edition": data.edition ? data.edition : '',
      "subject": data.subject ? data.subject : '',
      "eventType": data.eventType ? data.eventType : '',
      "targetPublic": data.targetPublic ? data.targetPublic : '',
      "logo": data.logo ? data.logo : '',
      "description": data.description ? data.description : '',
      "brief": data.brief ? data.brief : '',
      "website": data.website ? data.website : '',
      "email": data.email ? data.email : '',
      "telephones": this.tmpTelephones ? this.tmpTelephones : [],
      "poweredBy": {
        'institution': data.poweredByInstitution ? data.poweredByInstitution : '',
        'departament': data.poweredByDepartament ? data.poweredByDepartament : '',
      },
      "template": data.template,
      "days": this.tmpDays ? this.tmpDays : [],
      "locationCep": data.locationCep ? data.locationCep : '',
      "locationAddress": data.locationAddress ? data.locationAddress : '',
      "locationNumber": data.locationNumber ? data.locationNumber : '',
      "locationNeiborhood": data.locationNeiborhood ? data.locationNeiborhood : '',
      "locationCity": data.locationCity ? data.locationCity : '',
      "locationUF": data.locationUF ? data.locationUF : '',
      "locationCountry": data.locationCountry ? data.locationCountry : '',
      "locationLatLong": data.locationLatLong ? data.locationLatLong : '',
      "socialNetworks": {
        "facebook": data.socialNetworksFacebook ? data.socialNetworksFacebook : '',
        "twitter": data.socialNetworksTwitter ? data.socialNetworksTwitter : '',
        "github": data.socialNetworksGithub ? data.socialNetworksGithub : '',
        "linkedin": data.socialNetworksLinkedin ? data.socialNetworksLinkedin : '',
        "spotify": data.socialNetworksSpotify ? data.socialNetworksSpotify : '',
        "whatsapp": data.socialNetworksWhatssapp ? data.socialNetworksWhatssapp : '',
        "behance": data.socialNetworksBehance ? data.socialNetworksBehance : '',
        "youtubeChannel": data.socialNetworksYoutubeChannel ? data.socialNetworksYoutubeChannel : ''
      }
    };
  }

}
