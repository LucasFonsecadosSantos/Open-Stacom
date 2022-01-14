import { Router } from '@angular/router';
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
    private eventCreateService: EventCreateService,
    private router: Router
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

  public createEvent(template: Template): void {

    this.eventCreateService
      .create(template)
      .subscribe(
        response => {
          console.log(response)
          this.router.navigate([`pre-carregar/${response}`]);
        }
      );

  }

}
