import { Observable } from 'rxjs';
import { EventFindService } from './../../../services/event/event-find.service';
import { TemplateFindService } from './../../../services/templates/template-find.service';
import { PersonCreateService } from './../../../services/person';
import { PersonPageService } from './../../../pages/person/person-page.service';
import {
  Person,
  Template,
  Event
} from './../../../models';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

  event:    Event;
  template: Template;
  person: Person;

  constructor(
    private router:               Router,
    private route:                ActivatedRoute,
    private eventFind:            EventFindService,
    private templateFindService:  TemplateFindService,
    private personPageService:    PersonPageService,
    private personCreateService:  PersonCreateService
  ) { }

  ngOnInit(): void {

    this._getEvent();
    this._getSelectedPerson();

  }

  private _getTemplate(templateID: string): void {

    this.templateFindService
          .find(templateID)
          .subscribe(template => {this.template = template; console.log(template)});

  }

  // private _buildFormFields(): void {



  // }

  private _getSelectedPerson(): void {

    this.personPageService
          .getSelectedPerson()
          .subscribe(person => this.person = person);

  }

  private _getEvent(): void {

    this.eventFind.find(this._getEventIDFromRoute())
                    .subscribe(
                      event => {
                        this.event = event;
                        this._getTemplate(event.templateID);
                      }
                    );

  }

  private _getEventIDFromRoute(): string {

    return this.route.snapshot.params['eventID']

  }

}
