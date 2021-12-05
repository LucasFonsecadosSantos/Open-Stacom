import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Operation } from 'src/app/enums';
import { SponsorshipPlan } from 'src/app/enums/sponsorship-plan.enum';
import { Template, Event } from 'src/app/models';
import { SponsorForm } from 'src/app/models/sponsor-form.model';
import { Sponsor } from 'src/app/models/sponsor.model';
import { SponsorCreateService, SponsorUpdateService } from 'src/app/services/sponsor';
import { SponsorFormService } from './sponsor-form.service';

@Component({
  selector: 'app-sponsor-form',
  templateUrl: './sponsor-form.component.html',
  styleUrls: ['./sponsor-form.component.scss']
})
export class SponsorFormComponent implements OnInit {

  @ViewChild('sponsorForm')
  public sponsorForm: SponsorFormComponent;

  @Input()
  public event: Event;

  @Input()
  public template: Template;

  public sponsor: Sponsor;

  public sponsorFormModel: SponsorForm;

  public sponsorArray: Sponsor[];

  public static readonly operation: Operation;

  constructor(
    private _modalService: NgbModal,
    private _formService: SponsorFormService,
    private _createService: SponsorCreateService,
    private _updateService: SponsorUpdateService
  ) { }

  ngOnInit(): void {

    this._getFormObservables();

  }

  private _getFormObservables(): void {

    this._formService
          .getObservable()
          .subscribe(data => {

            this._setSponsor(data.sponsor, data.operation);
            this._setSponsorFormModel(data);
            this._launchModal();
            // this._buildFormFields();

          });

  }

  public get operationUpdate() {
    return Operation.Update;
  }

  public get operationCreate() {
    return Operation.Create;
  }

  public get possibleSponsorPlans() {
    return Object.keys(SponsorshipPlan);
  }

  private _setSponsor(sponsor: Sponsor, operation: Operation): void {

    this.sponsor = (operation == Operation.Update) ? sponsor : this._getNewSponsor();

  }

  private _getNewSponsor(): Sponsor {

    return {
      "id": null,
      "name": null,
      "picture": null,
      "telephone": null,
      "email": null,
      "website": null,
      "sponsorshipPlan": null,
      "brief": null,
      "location": null
    }

  }

  private _setSponsorFormModel(model: SponsorForm): void {

    this.sponsorFormModel = model;

  }

  private _launchModal(): void {

    if (!this._modalService.hasOpenModals()) {

      this._modalService.open(this.sponsorForm,
        {
          ariaLabelledBy: 'modal-basic-title',
          windowClass: 'modal-custom',
          size: 'lg',
          centered: true,
          modalDialogClass: 'modal-dialog-custom'
        }
      );

    }

  }

  public create(sponsor: Sponsor): void {

    this._createService
        .create(sponsor)
        .subscribe(response => {
          //TODO Here - IMplements a toast with message
        });

  }

  public update(sponsor: Sponsor): void {

    this._updateService
        .update(sponsor)
        .subscribe(response => {
          //TODO Here - implement a toast with message
        });

  }

}
