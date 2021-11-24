import { PersonUpdateService } from './../../../services/person/person-update.service';
import { PersonForm } from './../../../models/person-form.model';
import { PersonFormService } from './person-form.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonCreateService } from './../../../services/person';
import {
  Person,
  Template,
  Event
} from './../../../models';
import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { SharedEventService, SharedPersonService, SharedTemplateService } from 'src/app/services/shared';
import { Operation } from 'src/app/enums';
import { isThisTypeNode } from 'typescript';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

  @ViewChild('personForm') personForm;
  public personFormModel: PersonForm;
  public person: Person;
  public template: Template;

  constructor(
    private _modalService: NgbModal,
    private _personFormService: PersonFormService,
    private _personCreateService: PersonCreateService,
    private _personUpdateService: PersonUpdateService,
    private _sharedTemplateService: SharedTemplateService,
    private _sharedPersonService: SharedPersonService
  ) { }

  ngOnInit(): void {

    this._getTemplateObservable();
    this._getFormObservables();

  }

  private _getTemplateObservable(): void {
    this._sharedTemplateService.getTemplateObservable().subscribe(
      templateResponse => this.template = templateResponse
    );
  }

  private _getFormObservables(): void {

    this._personFormService.getObservable()
                              .subscribe(data => {

                                this._sharedPersonService.getPersonObservable().subscribe(

                                  personResponse => {

                                    alert(this.template.id);
                                    this._setPerson(personResponse, data.operation);
                                    this._setPersonFormModel(data);
                                    this._launchModal();
                                    this._buildFormFields();

                                  }

                                );

                              });

  }

  private _setPerson(person: Person, operation: Operation): void {

    this.person = (operation == Operation.Update) ? person : null;

  }

  private _setPersonFormModel(model: PersonForm): void {

    this.personFormModel = model;

  }

  private _launchModal(): void {

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
