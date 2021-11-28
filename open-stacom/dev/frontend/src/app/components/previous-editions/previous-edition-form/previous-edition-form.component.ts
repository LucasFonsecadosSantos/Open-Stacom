import {
  Template,
  Event,
  PreviousEdition
} from './../../../models';
import { Component, Input, OnInit } from '@angular/core';
import { PreviousEditionCreateService, PreviousEditionUpdateService } from 'src/app/services/previous-edition';
import { ExcelExportService } from 'src/app/services/utils';

@Component({
  selector: 'app-previous-edition-form',
  templateUrl: './previous-edition-form.component.html',
  styleUrls: ['./previous-edition-form.component.scss']
})
export class PreviousEditionFormComponent implements OnInit {

  @Input()
  public event: Event;

  @Input()
  public template: Template;

  constructor(
    private _createService: PreviousEditionCreateService,
    private _updateService: PreviousEditionUpdateService
  ) { }

  ngOnInit(): void {
  }

  public createOrUpadate(edition: PreviousEdition): void {



  }

  public create(edition: PreviousEdition): void {

    this._createService.create(edition).subscribe(
      response => {

      }
    );

  }

  public update(edition: PreviousEdition): void {

    this._updateService.update(edition).subscribe(
      response => {

      }
    );

  }

}
