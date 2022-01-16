import { Component, Input, OnInit } from '@angular/core';
import { Operation } from 'src/app/enums';
import { Proceeding, Event } from 'src/app/models';
import { SharedProceedingsService } from 'src/app/pages';
import { ProceedingDeleteService } from 'src/app/services/proceeding';
import { ConfirmDialogService } from '../../dialog';
import { ProceedingFormService } from '../proceeding-form';

@Component({
  selector: 'app-proceeding-info',
  templateUrl: './proceeding-info.component.html',
  styleUrls: ['./proceeding-info.component.scss']
})
export class ProceedingInfoComponent implements OnInit {


  @Input()
  public event: Event;

  public proceeding: Proceeding;

  constructor(
    private _formService: ProceedingFormService,
    private _confirmDialogService: ConfirmDialogService,
    private _deleteService: ProceedingDeleteService,
    private _sharedService: SharedProceedingsService
  ) { }

  ngOnInit(): void {

    this._getResponseObservables();

  }

  public editProceeding(proceeding: Proceeding): void {

    this._formService.launchModal({
      operation:  Operation.Update,
      model: proceeding
    });

  }

  public deletePerson(proceeding: Proceeding): void {

    this._confirmDialogService.launchConfirmDialog({
      title: 'Antes de prosseguit..'
    });

    // this._sharedEventService.getEventObservable().subscribe(
    //   eventResponse => this._personDeleteService.delete(person.id, eventResponse.id)

    // );

    this._deleteService.delete(proceeding.id, this.event.id);


  }

  private _getResponseObservables(): void {

    this._sharedService.getProceedingFromListObservable().subscribe(
      response => {
        this.proceeding = response ? response : null
      }
    );

  }


}
