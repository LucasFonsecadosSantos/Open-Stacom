import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogService } from 'src/app/components/dialog';
import { SponsorListComponent } from 'src/app/components/sponsor';
import { SponsorFormService } from 'src/app/components/sponsor/sponsor-form/sponsor-form.service';
import { Operation } from 'src/app/enums';
import { Template, Event } from 'src/app/models';
import { EventFindService } from 'src/app/services/event';
import { SponsorDeleteService } from 'src/app/services/sponsor';
import { TemplateFindService } from 'src/app/services/templates';
import { ExcelExportService } from 'src/app/services/utils';

@Component({
  selector: 'app-sponsorship',
  templateUrl: './sponsorship.component.html',
  styleUrls: ['./sponsorship.component.scss']
})
export class SponsorshipComponent implements OnInit {

  @ViewChild("sponsorListComponent")
  public sponsorListComponent: SponsorListComponent;

  public event: Event;

  public isDataLoaded: boolean = false;


  constructor(
    private _exportExcelService: ExcelExportService,
    private _deleteService: SponsorDeleteService,
    private toastr: ToastrService,
    private _eventFindService: EventFindService,
    private _activatedRoute: ActivatedRoute,
    private _formService: SponsorFormService,
    private _confirmDialogService: ConfirmDialogService
  ) { }

  ngOnInit(): void {

    this._getEventAndTemplate();
    this._getResponseObservables();

  }


  private _getEventAndTemplate(): void {

    this._activatedRoute.paramMap.subscribe(

      params => {
        this._getEvent(params.get('eventID'));
      }

    );
  }

  private _getEvent(eventID: string): void {

    this._eventFindService
        .find(eventID)
        .subscribe(
          event => {
            this.event = event;
            this.isDataLoaded = true;
          }
        );
  }

  public exportExcel(): void {
    this._exportExcelService.exportExcel(this.sponsorListComponent.sponsorArray, 'LISTA_DE_ATIVIDADES');
  }

  public confirmDeleteAllSponsor(): void {

    this._confirmDialogService.launchConfirmDialog(
      {
        acceptButton: 'Sim, estou ciente e desejo continuar.',
        cancelButton: 'Cancelar',
        message: 'Você realmente deseja EXCLUIR TODOS OS PATROCINADORES registradas no sistema?',
        title: 'Antes de prosseguir...'
      }
    );
  }

  public openAddSponsorForm(): void {

    this._formService.launchModal({
      operation: Operation.Create
    });

  }

  private _getResponseObservables(): void {

    this._formService
        .getResponseObservable()
        .subscribe({
          next: sponsorName => {
            this._showToast(`Legal! O patrocinador ${sponsorName} foi adicionado.`)
          }
        });

    this._confirmDialogService
          .getResponseObservable()
          .subscribe(
            operation => this._deleteAllPeople()
          );

  }

  private _showToast(message: string): void {
    this.toastr.success(`<span class="tim-icons icon-check-2" [data-notify]="icon"></span> ${message}.`, '', {
      disableTimeOut: false,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-success alert-with-icon",
      positionClass: 'toast-top-center'
    });
  }

  private _deleteAllPeople(): void {

    this._deleteService
        .deleteAll(this.event)
        .subscribe({
          next: response => {}
          //TODO HERE
        });

  }
}
