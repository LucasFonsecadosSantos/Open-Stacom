import { Component, Input, OnInit } from '@angular/core';
import { PreviousEditionDeleteService, PreviousEditionFindService } from 'src/app/services/previous-edition';

import {
  Event,
  PreviousEdition
} from './../../../models';

@Component({
  selector: 'app-previous-edition-list',
  templateUrl: './previous-edition-list.component.html',
  styleUrls: ['./previous-edition-list.component.scss']
})
export class PreviousEditionListComponent implements OnInit {

  @Input()
  public event: Event;

  public editionsArray: PreviousEdition[]

  constructor(
    private _fetchService: PreviousEditionFindService,
    private _deleteService: PreviousEditionDeleteService
  ) { }

  ngOnInit(): void {
    this._populateList();
  }

  private _populateList(): void {

    this._fetchService
          .list(this.event.id)
          .subscribe(
            response => {
              console.log(response);
              this.editionsArray = response;
            }
          );

  }

  public deleteEdition(edition: PreviousEdition): void {

    this._deleteService
      .delete(edition.id, this.event.id)
      .subscribe(

        response => console.log

      );

  }

}
