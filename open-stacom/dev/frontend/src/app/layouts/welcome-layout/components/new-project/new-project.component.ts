import { EventCreateService } from './../../../../services/event/event-create.service';
import { Component, OnInit } from '@angular/core';
import { Template } from 'src/app/models';
import { TemplatesRetrievingService } from 'src/app/services/templates';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  templates: Template[];
  messages: string[];

  constructor(
    private templatesRetrievingService: TemplatesRetrievingService,
    private eventCreateService: EventCreateService
  ) { }

  ngOnInit(): void {

    this._getTemplates();

  }

  private _getTemplates(): void {

    this.templatesRetrievingService.retrieving().subscribe(

      response => {
        this.templates = TemplatesRetrievingService.buildSources(response);
      }

    );
  }

  createEvent(templateID: string): void {

    this.eventCreateService
      .create(templateID)
      .subscribe(
        response => {
          //TODO here
        }
      );

  }

}
