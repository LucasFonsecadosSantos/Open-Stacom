import { Component, ElementRef, Input, OnInit } from '@angular/core';
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

  public eventType: any[];

  constructor(
    private _cepService: CepService,
    private _eventUpdateService: EventUpdateService
  ) { }

  ngOnInit(): void {

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

  public fetchCEPInformations(cep: string): void {

    this._cepService
          .fetchInformationFromCEP(cep)
          .subscribe(
            response => {
              this.event.location = {
                "cep": response.cep,
                "city": response.localidade,
                "street": response.logradouro,
                "state": response.uf,
                "neiborhood": response.bairro,
                "country": "Brasil"
              }
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
