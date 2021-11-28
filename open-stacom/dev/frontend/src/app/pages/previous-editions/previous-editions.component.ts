import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventFindService } from 'src/app/services/event';
import {
  Event,
  Template
}  from './../../models';
import { TemplateFindService } from 'src/app/services/templates';

@Component({
  selector: 'app-previous-editions',
  templateUrl: './previous-editions.component.html',
  styleUrls: ['./previous-editions.component.scss']
})
export class PreviousEditionsComponent implements OnInit {

  public template: Template;
  public event: Event;
  public isDataLoaded: boolean = false;

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
