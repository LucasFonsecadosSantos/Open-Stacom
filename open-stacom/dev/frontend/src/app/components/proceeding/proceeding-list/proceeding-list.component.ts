import { Component, Input, OnInit } from '@angular/core';
import { Operation } from 'src/app/enums';
import { SharedProceedingsService } from 'src/app/pages';
import { ProceedingFormService } from '..';
import { Event, Proceeding } from './../../../models';

@Component({
  selector: 'app-proceeding-list',
  templateUrl: './proceeding-list.component.html',
  styleUrls: ['./proceeding-list.component.scss']
})
export class ProceedingListComponent implements OnInit {

  @Input()
  public event: Event;

  public proceedingArray: Proceeding[];

  constructor(
    private _findService: ProceedingFindService,
    private _sharedProceedingService: SharedProceedingsService,
    private _proceedingFormService: ProceedingFormService
  ) { }

  ngOnInit(): void {

    this._fetchProceedings();

  }

  private _fetchProceedings(): void {

    this._findService
        .list(this.event.id)
        .subscribe(proceeding => this.proceedingArray = proceeding);

  }

  public selectProceeding(proceeding: Proceeding): void {

    this._sharedProceedingService
        .sharedProceedingFromListToInfo(proceeding);

  }

  public editProceeding(proceeding: Proceeding): void {

    this._proceedingFormService.launchModal({
      operation: Operation.Update,
      proceeding: proceeding
    });

  }
}
