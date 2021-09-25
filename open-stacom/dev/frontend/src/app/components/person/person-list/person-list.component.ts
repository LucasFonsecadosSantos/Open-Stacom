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
import {
  ActivatedRoute,
  Router
} from '@angular/router';

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
    private route:                ActivatedRoute,
    private router:               Router,
    private eventFindService:     EventFindService,
    private templateFindService:  TemplateFindService,
    private personFindService:    PersonFindService,
    private personPageService:    PersonPageService
  ) { }

  ngOnInit(): void {

    this._getTemplate(this._getEventIDFromRoute());
    this._listPeople();
  }

  selectPerson(person: Person): void {
    this.personPageService.updatePersonSelected(person);
  }

  private _getTemplate(eventID: string): void {

    this.eventFindService.find(eventID).subscribe(
      response => {
        this.event = response;
        this._getTemplateById(response.templateID);
      }
    );
  }

  private _getTemplateById(templateID: string) {

    this.templateFindService.find(templateID)
      .subscribe(
        templateReponse => {
          this.template = templateReponse;
        }
      );

  }

  private _getEventIDFromRoute(): string {

    return this.route.snapshot.params['eventID']

  }

  private _listPeople(): void {

    this.personFindService.list().subscribe(

      response => {

        //TODO Build sources of person object
        this.personArray = response;
        // this.personPageService.updatePersonSelected(response[0]);

      }

    );

  }

}
