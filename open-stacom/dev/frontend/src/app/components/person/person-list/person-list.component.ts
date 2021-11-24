import { ActivatedRoute } from '@angular/router';
import { UrlService } from './../../../services/utils/url.service';
import { PersonPageService } from './../../../pages/person/person-page.service';
import { TemplateFindService } from './../../../services/templates/template-find.service';
import { EventFindService } from './../../../services/event/event-find.service';
import { PersonFindService } from './../../../services/person/person-find.service';
import { Component, Input, OnInit} from '@angular/core';
import {
  Event,
  Person,
  Template
} from 'src/app/models';
import { SharedInformationService } from 'src/app/services/shared';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  @Input('template') template;
  // template:       Template;
  // event:          Event;
  @Input('event') event;
  @Input() personArray: Person[];
  personSelected: Person;

  constructor(
    // private _eventFindService:     EventFindService,
    // private _templateFindService:  TemplateFindService,
    private _personPageService:    PersonPageService,
    // private _activatedRoute:       ActivatedRoute,
    private _sharedInformationService: SharedInformationService
  ) { }

  ngOnInit(): void {

    // this._getEvent();
    // this._getTemplate();
    this.event = this._sharedInformationService.getEvent();
    this.template = this._sharedInformationService.getTemplate();
    // this._listPeople();
    // this._getEventID();

  }

  // private _getTemplate(): void {
  //   this._sharedInformationService.getTemplate().subscribe(
  //     templateResponse => this.template = templateResponse
  //   )
  // }

  // private _getEvent(): void {
  //   this._sharedInformationService.getEvent().subscribe(
  //     eventReponse => this.event = eventReponse
  //   );
  // }

  public selectPerson(person: Person): void {
    this._personPageService.updatePersonSelected(person);
  }

  // private _getEventID(): void {

  //   this._activatedRoute.paramMap.subscribe(
  //     params => {
  //       this._getTemplate(params.get('eventID'));
  //       this._listPeople(params.get('eventID'));
  //     }
  //   );
  // }

  // private _getTemplate(eventID: string): void {

  //   this._eventFindService.find(eventID).subscribe(
  //     response => {
  //       this.event = response;
  //       this._getTemplateById(response.templateID);
  //     }
  //   );
  // }

  // private _getTemplateById(templateID: string) {

  //   this._templateFindService.find(templateID)
  //     .subscribe(
  //       templateReponse => this.template = templateReponse
  //     );

  // // }

  // private _listPeople(): void {

  //   this._personFindService.list(this.event.id).subscribe(
  //     response => this.personArray = response
  //   );

  // }

}
