import { PersonForm } from './../../../models/person-form.model';
import { PersonFormService } from './person-form.service';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  OnInit,
  ViewChild
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

  @ViewChild('personForm') personForm;
  personFormModel:  PersonForm;
  event:            Event;
  template:         Template;
  person:           Person;

  constructor(
    private _modalService:        NgbModal,
    private _personFormService:   PersonFormService,
    private templateFindService:  TemplateFindService,
    private personCreateService:  PersonCreateService
  ) { }

  ngOnInit(): void {

    this._getFormObservable();

  }

  private _getFormObservable(): void {

    this._personFormService.getObservable()
                              .subscribe(data => {
                                this.personForm = data;
                                this._launchModal();
                              })

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

  // private _buildFormFields(): void {



  // }


}
