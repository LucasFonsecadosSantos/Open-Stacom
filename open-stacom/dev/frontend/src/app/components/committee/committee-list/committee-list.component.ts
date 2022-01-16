import { Component, Input, OnInit } from '@angular/core';
import { Operation } from 'src/app/enums';
import { CommitteFindService } from 'src/app/services/committee';
import { CommitteeFormService } from '..';

import {
  Event,
  Template,
  Committee
} from './../../../models';

@Component({
  selector: 'app-committee-list',
  templateUrl: './committee-list.component.html',
  styleUrls: ['./committee-list.component.scss']
})
export class CommitteeListComponent implements OnInit {

  @Input()
  public event: Event;

  @Input()
  public template: Template;

  public committeesArray: Committee[]

  constructor(
    private _findService: CommitteFindService,
    private _formService: CommitteeFormService
  ) { }

  ngOnInit(): void {

    this._listCommittees();

  }

  private _listCommittees(): void {

    this.committeesArray = this._findService
                                .list(this.event);
    console.log(this.committeesArray);

  }

  public editCommittee(committee: Committee): void {

    this._formService.launchModal(
      {
        model: committee,
        operation: Operation.Update
      }
    );

  }

}
