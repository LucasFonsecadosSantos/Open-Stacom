import { Component, Input, OnInit } from '@angular/core';
import { Operation } from 'src/app/enums';
import { PreviousEditionDeleteService, PreviousEditionFindService } from 'src/app/services/previous-edition';
import { PreviousEditionFormService } from '..';

import {
  Event,
  PreviousEdition,
  Webpage
} from './../../../models';

@Component({
  selector: 'app-previous-edition-list',
  templateUrl: './previous-edition-list.component.html',
  styleUrls: ['./previous-edition-list.component.scss']
})
export class PreviousEditionListComponent implements OnInit {

  @Input()
  public webpage: Webpage;

  public editionsArray: PreviousEdition[]

  constructor(
    private _fetchService: PreviousEditionFindService,
    private _deleteService: PreviousEditionDeleteService,
    private _formService: PreviousEditionFormService
  ) { }

  ngOnInit(): void {
    this._populateList();
  }

  private _populateList(): void {

    this.editionsArray = this._fetchService
                              .list(this.webpage);

  }

  public editEdition(edition: PreviousEdition): void {

    this._formService.submitEdition(
      {
        operation: Operation.Update,
        title: `Atualizar informações de ${edition.name}`,
        model: edition
      }
    );

  }

  public deleteEdition(edition: PreviousEdition): void {

    this._deleteService
      .delete(edition.id, this.webpage.id)
      .subscribe(

        response => console.log

      );

  }

}
