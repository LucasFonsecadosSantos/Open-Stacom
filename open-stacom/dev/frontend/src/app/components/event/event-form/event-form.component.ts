import { Component, Input, OnInit } from '@angular/core';
import { EventUpdateService } from 'src/app/services/event';
import { ExcelExportService } from 'src/app/services/utils';
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
    private _exportService: ExcelExportService,
    private _eventUpdateService: EventUpdateService
  ) { }

  ngOnInit(): void {

    this._setEventTypes();

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

  public update(event: Event): void {

    this._eventUpdateService
      .update(event)
      .subscribe(
        //show toast message
      );

  }

  public exportToExcel(event: Event): void {

    this._exportService.exportExcel([event], `DADOS_DE_${event.name}`);

  }

}
