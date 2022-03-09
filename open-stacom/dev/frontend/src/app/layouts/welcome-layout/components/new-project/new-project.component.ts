import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Template } from 'src/app/models';
import { TemplatesRetrievingService } from 'src/app/services/templates';
import { WebpageCreateService } from 'src/app/services/webpage/webpage-create.service';

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
    private _webpageCreateService: WebpageCreateService,
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

  public createWebpage(template: Template): void {

    this._webpageCreateService
      .create(template)
      .subscribe(
        response => {
          response = JSON.parse(response);
          this.router.navigate([`pre-carregar/${response.id}`]);
        }
      );

  }

}
