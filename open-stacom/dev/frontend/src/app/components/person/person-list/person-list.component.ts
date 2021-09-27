import { UrlService } from './../../../services/utils/url.service';
import { PersonPageService } from './../../../pages/person/person-page.service';
import { TemplateFindService } from './../../../services/templates/template-find.service';
import { EventFindService } from './../../../services/event/event-find.service';
import { PersonFindService } from './../../../services/person/person-find.service';
import { Component, OnInit} from '@angular/core';
import {
  Event,
  Person,
  Template
} from 'src/app/models';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  template:       Template;
  event:          Event;
  personArray:    Person[];
  personSelected: Person;

  constructor(
    private _eventFindService:     EventFindService,
    private _templateFindService:  TemplateFindService,
    private _personFindService:    PersonFindService,
    private _personPageService:    PersonPageService,
    private _urlService:          UrlService
  ) { }

  ngOnInit(): void {

    this._getTemplate(this._urlService.getEventIDFromRoute());
    this._listPeople(this._urlService.getEventIDFromRoute());
  }

  selectPerson(person: Person): void {
    this._personPageService.updatePersonSelected(person);
  }

  private _getTemplate(eventID: string): void {

    this._eventFindService.find(eventID).subscribe(
      response => {
        this.event = response;
        this._getTemplateById(response.templateID);
      }
    );
  }

  private _getTemplateById(templateID: string) {

    this._templateFindService.find(templateID)
      .subscribe(
        templateReponse => this.template = templateReponse
      );

  }

  private _listPeople(eventID: string): void {

    this._personFindService.list(eventID).subscribe(
      response => this.personArray = response
    );

  }

}
