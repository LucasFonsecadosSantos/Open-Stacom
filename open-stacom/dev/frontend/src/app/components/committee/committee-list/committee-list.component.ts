import { Component, Input, OnInit } from '@angular/core';
import { CommitteFindService } from 'src/app/services/committee';

import {
  Event,
  Template,
  Committee,
  CommitteeForm
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
    private _findService: CommitteFindService
  ) { }

  ngOnInit(): void {

    this._listCommittees();

  }

  private _listCommittees(): void {

    this._findService
          .list(this.event.id)
          .subscribe(
            response => this.committeesArray = response
          );

  }

}
