import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event, Template } from 'src/app/models';
import { EventFindService } from 'src/app/services/event';
import { TemplateFindService } from 'src/app/services/templates';

@Component({
  selector: 'app-cadastre-event',
  templateUrl: './cadastre-event.component.html',
  styleUrls: ['./cadastre-event.component.scss']
})
export class CadastreEventComponent implements OnInit {

  public isDataLoaded: boolean = false;

  public event: Event;

  public template: Template;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _eventFindService: EventFindService,
    private _templateFindService: TemplateFindService
  ) { }

  ngOnInit(): void {

    this._getEventAndTemplate();

  }

  private _getEventAndTemplate(): void {

    this._activatedRoute.paramMap.subscribe(

      params => {
        this._getEvent(params.get('eventID'));
      }

    );
  }

  private _getEvent(eventID: string): void {

    this._eventFindService
        .find(eventID)
        .subscribe(
          event => {
            this.event = event;
            this._getTemplateById(event);
          }
        );
  }

  private _getTemplateById(event: Event): void {

    this.template = this._templateFindService
                        .find(event);
      this.isDataLoaded = true;

  }


}
