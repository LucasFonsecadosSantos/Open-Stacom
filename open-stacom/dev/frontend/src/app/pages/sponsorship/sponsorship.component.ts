import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogService } from 'src/app/components/dialog';
import { SponsorListComponent } from 'src/app/components/sponsor';
import { SponsorFormService } from 'src/app/components/sponsor/sponsor-form/sponsor-form.service';
import { Operation } from 'src/app/enums';
import { Template, Event } from 'src/app/models';
import { EventFindService } from 'src/app/services/event';
import { SponsorDeleteService } from 'src/app/services/sponsor';
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

  public entityDownloadURL: SafeUrl;


  constructor(
    private _exportExcelService: ExcelExportService,
    private _deleteService: SponsorDeleteService,
    private toastr: ToastrService,
    private _eventFindService: EventFindService,
    private _activatedRoute: ActivatedRoute,
    private _formService: SponsorFormService,
    private _confirmDialogService: ConfirmDialogService,
    private _sanitizer: DomSanitizer
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

  public hasData(): boolean {

    return  this.event &&
            this.event.template &&
            this.event.template.objects &&
            this.event.template.objects.sponsor &&
            this.event.template.objects.sponsor.content &&
            this.event.template.objects.sponsor.content.length > 0;
  }

  public exportExcel(): void {
    this._exportExcelService.exportExcel(this.sponsorListComponent.sponsorArray, 'LISTA_DE_ATIVIDADES');
  }

  public downloadEntitySource(): void {
    let fileName: string = this.event.name;
    let data = JSON.stringify(this.event.template.objects.sponsor.content);
    this.entityDownloadURL = this._sanitizer.bypassSecurityTrustUrl(
      `data:text/json;charset=UTF-8,${encodeURIComponent(data)}`
    );
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
