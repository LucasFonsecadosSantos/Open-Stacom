import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Operation } from 'src/app/enums';
import { SponsorshipPlan } from 'src/app/enums/sponsorship-plan.enum';
import { Template, Event } from 'src/app/models';
import { SponsorForm } from 'src/app/models/sponsor-form.model';
import { Sponsor } from 'src/app/models/sponsor.model';
import { SponsorCreateService, SponsorUpdateService } from 'src/app/services/sponsor';
import { CepService } from 'src/app/services/utils';
import { SponsorFormService } from './sponsor-form.service';
import { getAllStates, getAllCities, getStateCities } from 'easy-location-br';

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

  public states: any;

  public static readonly operation: Operation;

  constructor(
    private _modalService: NgbModal,
    private _cepService: CepService,
    private _formService: SponsorFormService,
    private _createService: SponsorCreateService,
    private _updateService: SponsorUpdateService
  ) { }

  ngOnInit(): void {

    this.states = getAllStates();
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
    return Object.keys(SponsorshipPlan).filter(key => !isNaN(Number(SponsorshipPlan[key])));
  }

  private _setSponsor(sponsor: Sponsor, operation: Operation): void {

    this.sponsor = (operation == Operation.Update) ? sponsor : this._getNewSponsor();

  }

  private _getNewSponsor(): Sponsor {

    return {
      "id": '',
      "name": '',
      "picture": '',
      "telephone": '',
      "email": '',
      "website": '',
      "sponsorshipPlan": null,
      "brief": '',
      "locationCep": '',
      "locationAddress": '',
      "locationNeiborhood": '',
      "locationNumber": '',
      "locationUF": '',
      "locationCountry": ''
    }

  }

  public fetchCEPInformations(cep: string): void {

    this._cepService
          .fetchInformationFromCEP(cep)
          .subscribe(
            response => {
              this.sponsor.locationCep = response.cep,
              this.sponsor.locationCity = response.localidade,
              this.sponsor.locationAddress = response.logradouro,
              this.sponsor.locationUF = response.uf,
              this.sponsor.locationNeiborhood = response.bairro,
              this.sponsor.locationCountry = "Brasil"
            }
          );

  }

  public uploadPicture(): void {}

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

  public createOrUpdate(data: any) {

    this._createService
        .create(this._loadForm(data), this.event)
        .subscribe(response => {
          //TODO Here

        });

  }

  public getCitiesFromState(state: string): any {

    return this.getCitiesFromState(state);

  }


  private _loadForm(data: any): Sponsor {

    return {
      "name": data.name ? data.name : '',
      // "picture": data.picture ? data.picture : '',
      "brief": data.brief ? data.brief : '',
      "website": data.website ? data.website : '',
      "email": data.email ? data.email : '',
      "telephone": data.telephone ? data.telephone : '',
      "locationCep": data.locationCep ? data.locationCep : '',
      "locationAddress": data.locationAddress ? data.locationAddress : '',
      "locationNumber": data.locationNumber ? data.locationNumber : '',
      "locationNeiborhood": data.locationNeiborhood ? data.locationNeiborhood : '',
      "locationCity": data.locationCity ? data.locationCity : '',
      "locationUF": data.locationUF ? data.locationUF : '',
      "locationCountry": data.locationCountry ? data.locationCountry : '',
      "sponsorshipPlan": data.sponsorshipPlan ? data.sponsorshipPlan : ''
    };

  }

  public update(sponsor: Sponsor): void {

    this._updateService
        .update(sponsor)
        .subscribe(response => {
          //TODO Here - implement a toast with message
        });

  }

}
