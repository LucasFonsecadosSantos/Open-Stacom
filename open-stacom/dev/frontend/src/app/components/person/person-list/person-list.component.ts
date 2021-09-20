import { TemplateFindService } from './../../../services/templates/template-find.service';
import { EventFindService } from './../../../services/event/event-find.service';
import { PersonFindService } from './../../../services/person/person-find.service';
import { Component, OnInit } from '@angular/core';
import {
  Person,
  Template
} from 'src/app/models';
import {
  ActivatedRoute,
  ParamMap,
  Router
} from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  template:     Template;
  eventID:      string;
  personArray:  Person[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paramMap: ParamMap,
    private eventFindService:     EventFindService,
    private templateFindService:  TemplateFindService,
    private personFindService:    PersonFindService,
  ) { }

  ngOnInit(): void {

    this._getEventIDFromRoute();
    this._getTemplate(this._getTemplateID());
    this._listPeople();

  }

  private _getTemplate(templateID: string): void {

    this.templateFindService.find(templateID)
      .subscribe(
        response => {
          this.template = response;
        }
      );

  }

  private _getTemplateID(): string {

    let templateID: string;

    this.eventFindService.find(this.eventID)
      .subscribe(
        response => {
          templateID = response.templateID;
        }
      );

    return templateID;
  }

  private  _getEventIDFromRoute(): void {

    this.route.queryParamMap.subscribe(params => {
      this.eventID = params['eventID'];
    });

  }

  private _listPeople(): void {

    this.personFindService.list().subscribe(

      response => {

        //TODO Build sources of person object
        this.personArray = response;

      }

    );

  }

}
