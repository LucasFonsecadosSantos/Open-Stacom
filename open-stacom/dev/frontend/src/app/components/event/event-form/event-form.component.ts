import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { getAllStates, getAllCities, getStateCities } from 'easy-location-br';
import { EventUpdateService } from 'src/app/services/event';
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

  public states: any;

  public eventType: any[];

  constructor(
    private _cepService: CepService,
    private _eventUpdateService: EventUpdateService
  ) { }

  ngOnInit(): void {

    this.states = getAllStates();
    this._setEventTypes();

  }

  public addTelephoneToList(contact: string, telephone: string): void {

      this.event.telephones.push(
        {
          "name": contact,
          "number": telephone
        }
      );

  }

  public addDateToList(date: string): void {

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

  public update(event: Event): void {

    this._eventUpdateService
      .update(event)
      .subscribe( resp =>
        console.log(resp)
        //show toast message
      );

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

}
