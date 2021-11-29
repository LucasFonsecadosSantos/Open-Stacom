import { Component, Input, OnInit } from '@angular/core';
import {
  Template,
  Event,
  PreviousEdition
} from './../../../models';
import {
  PreviousEditionCreateService,
  PreviousEditionUpdateService
} from 'src/app/services/previous-edition';
import { Operation } from 'src/app/enums';
import { PreviousEditionForm } from 'src/app/models/previous-edition-form.model';
import { PreviousEditionFormService } from '.';

@Component({
  selector: 'app-previous-edition-form',
  templateUrl: './previous-edition-form.component.html',
  styleUrls: ['./previous-edition-form.component.scss']
})
export class PreviousEditionFormComponent implements OnInit {

  // @ViewChild('previousEdition') previousEdition;
  // public previousEditionFormModel: PreviousEditionForm;

  @Input()
  public event: Event;

  @Input()
  public template: Template;

  public edition: PreviousEdition;

  public previousEditionFormModel: PreviousEditionForm;

  public static readonly operation: Operation;

  constructor(
    private _createService: PreviousEditionCreateService,
    private _updateService: PreviousEditionUpdateService,
    private _formService: PreviousEditionFormService
  ) { }

  ngOnInit(): void {

    this._initForm();
    this._getFormObservables();
  }

  private _initForm(): void {
    this.previousEditionFormModel = {
      title: 'Registrar uma edição passada do evento',
      operation: Operation.Create,
      edition: undefined
    }
  }

  private _getFormObservables(): void {

    this._formService
          .getObservable()
          .subscribe(data => {

            this._setEdition(data.edition, data.operation);
            this._setEditionFormModel(data);

          });

  }

  private _setEditionFormModel(model: PreviousEditionForm): void {

    if (model) {
      this.previousEditionFormModel = model;
    }

  }

  private _setEdition(edition: PreviousEdition, operation: Operation): void {
    this.edition = (operation == Operation.Update && edition) ? edition : undefined;
  }

  public get operationUpdate() {
    return Operation.Update;
  }

  public get operationCreate() {
    return Operation.Create;
  }

  public createOrUpadate(edition: PreviousEdition): void {

    if (this.previousEditionFormModel.operation == Operation.Create) {
      this.create(edition);
    } else {
      this.update(edition);
    }

  }

  public create(edition: PreviousEdition): void {

    this._createService
          .create(edition)
          .subscribe(
            response => {
              //TODO here
            }
          );

  }

  public update(edition: PreviousEdition): void {

    this._updateService
          .update(edition)
          .subscribe(
            response => {
              //TODO Here
            }
          );

  }

}
