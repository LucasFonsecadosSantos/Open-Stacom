import { TemplatesRetrievingService } from './../../../../services/templates/templates-retrieving.service';
import { Component, OnInit } from '@angular/core';
import { Template } from 'src/app/models';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  templates: Template[];
  messages: string[];

  constructor(private templatesRetrievingService: TemplatesRetrievingService) { }

  ngOnInit(): void {

    this.templatesRetrievingService.retrieving().subscribe(

      response => {
        this.templates = response;
      }

    );

  }

}
