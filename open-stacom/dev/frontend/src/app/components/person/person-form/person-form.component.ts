import { PersonUpdateService } from './../../../services/person/person-update.service';
import { PersonForm } from './../../../models/person-form.model';
import { PersonFormService } from './person-form.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EventFindService } from './../../../services/event/event-find.service';
import { TemplateFindService } from './../../../services/templates/template-find.service';
import { PersonCreateService } from './../../../services/person';
import {
  Person,
  Template,
  Event
} from './../../../models';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

  @ViewChild('personForm') personForm;

  personFormModel:  PersonForm;
  event:            Event;
  template:         Template;
  person:           Person  = undefined;

  constructor(
    private _modalService:        NgbModal,
    private _personFormService:   PersonFormService,
    private _personCreateService: PersonCreateService,
    private _eventFindService:    EventFindService,
    private _templateFindService: TemplateFindService,
    private _personUpdateService: PersonUpdateService
  ) { }

  ngOnInit(): void {

    this._getFormObservable();

  }

  private _getFormObservable(): void {

    this._personFormService.getObservable()
                              .subscribe(data => {
                                this.person = data.person ? data.person : undefined;
                                this._setPersonFormModel(data);
                                this._launchModal();
                                this._buildFormFields();
                              })

  }

  private _setPersonFormModel(model: PersonForm): void {

    this.personFormModel = model;

    if (!model.template) {
      alert("tem");
      this._getEvent(model.eventID);
    } else {
      this.template = model.template;
    }

  }

  private _getEvent(eventID: string): void {

    this._eventFindService.find(eventID)
                              .subscribe(event => {
                                this.event = event;
                                this._getTemplate(event.templateID);
                              });
  }

  private _getTemplate(templateID: string): void {

    this._templateFindService.find(templateID)
                              .subscribe(template => {
                                this.template = template;
                                // this._buildFormFields();
                              })

  }

  private _launchModal(): void {
9
    this._modalService.open(this.personForm,
      {
        ariaLabelledBy: 'modal-basic-title',
        windowClass: 'modal-custom',
        size: 'lg',
        centered: true,
        modalDialogClass: 'modal-dialog-custom'


      }
    )

  }

  public createOrUpdate(person: Person): void {

    if (person.id) {
      this._updatePerson(person);
    } else {
      this._createPerson(person);
    }

  }

  private _createPerson(person: Person): void {

    this._personCreateService.create(person)
                              .subscribe(response => {
                                //TODO Here - IMplements a toast with message
                              });

  }

  private _updatePerson(person: Person): void {

    this._personUpdateService.update(person)
                              .subscribe(response => {
                                //TODO Here - implement a toast with message
                              });

  }

  private _buildFormFields(): void {


  }




}
9
