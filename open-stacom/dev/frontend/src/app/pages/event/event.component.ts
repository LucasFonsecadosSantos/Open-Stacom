import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Template, Event } from 'src/app/models';
import { EventFindService } from 'src/app/services/event';
import { TemplateFindService } from 'src/app/services/templates';
import { ExcelExportService } from 'src/app/services/utils';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  public isDataLoaded: boolean = false;
  public event: Event;
  public template: Template;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _exportService: ExcelExportService,
    private _eventFindService: EventFindService,
    private _templateFindService: TemplateFindService
  ) { }

  ngOnInit(): void {

    this._getEventAndTemplate();

  }


  public exportToExcel(event: Event): void {

    this._exportService.exportExcel([event], `DADOS_DE_${event.name}`);

  }

  public exportToPDF(event: Event): void {
    //TODO
  }

  private _getEventAndTemplate(): void {

    this._activatedRoute.paramMap.subscribe(

      params => {
        this._getEvent(params.get('eventID'));
      }

    );
  }

  private _getEvent(eventID: string): void {

    this._eventFindService.find(eventID).subscribe(event => {

      this.event = event;
      this._getTemplateById(event.templateID);

    });

  }

  private _getTemplateById(templateID: string) {

    this._templateFindService.find(templateID).subscribe(

      template =>
         {
           this.template = template;
           this.isDataLoaded = true;
          }

    );
  }

}
