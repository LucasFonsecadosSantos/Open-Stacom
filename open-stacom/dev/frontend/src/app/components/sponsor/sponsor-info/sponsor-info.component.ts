import { Component, Input, OnInit } from '@angular/core';
import { Operation } from 'src/app/enums';
import { Sponsor } from 'src/app/models';
import { SharedSponsorService } from 'src/app/pages';
import { SponsorDeleteService } from 'src/app/services/sponsor';
import { ConfirmDialogService } from '../../dialog';
import { SponsorFormService } from '../sponsor-form/sponsor-form.service';
import { Event } from './../../../models';

@Component({
  selector: 'app-sponsor-info',
  templateUrl: './sponsor-info.component.html',
  styleUrls: ['./sponsor-info.component.scss']
})
export class SponsorInfoComponent implements OnInit {

  @Input()
  public event: Event;

  public sponsor: Sponsor;

  constructor(
    private _formService: SponsorFormService,
    private _confirmDialogService: ConfirmDialogService,
    private _deleteService: SponsorDeleteService,
    private _sharedService: SharedSponsorService
  ) { }

  ngOnInit(): void {

    this._getResponseObservables();

  }

  public editSponsor(sponsor: Sponsor): void {

    this._formService.launchModal({
      operation: Operation.Update,
      model: sponsor
    });

  }

  public deleteSponsor(sponsor: Sponsor): void {

    // this._confirmDialogService.launchConfirmDialog({
    //   title: 'Antes de prosseguir..',
    //   message: `Deseja realmente excluir o registro de ${sponsor.name}?`,
    //   acceptButton: 'Sim! Estou ciente',
    //   cancelButton: 'Cancelar',

    // });
    this._deleteService.delete(sponsor, this.event);


  }

  private _getResponseObservables(): void {

    this._sharedService.getSponsorFromListObservable().subscribe(
      response => {
        this.sponsor = response ? response : null
      }
    );

    this._confirmDialogService
        .getResponseObservable()
        .subscribe({
          next: response => {
            this._deleteService.delete(this.sponsor, this.event);
          }
        });


  }

}
