import { Component, Input, OnInit } from '@angular/core';
import { Operation } from 'src/app/enums';
import { Sponsor, Template, Event } from 'src/app/models';
import { SharedSponsorService } from 'src/app/pages';
import { SponsorFindService } from 'src/app/services/sponsor';
import { SponsorFormService } from '../sponsor-form/sponsor-form.service';

@Component({
  selector: 'app-sponsor-list',
  templateUrl: './sponsor-list.component.html',
  styleUrls: ['./sponsor-list.component.scss']
})
export class SponsorListComponent implements OnInit {

  @Input()
  public event: Event;

  public sponsorArray: Sponsor[];

  constructor(
    private _findService: SponsorFindService,
    private _sharedSponsorService: SharedSponsorService,
    private _formService: SponsorFormService
  ) { }

  ngOnInit(): void {

    this._fetchSponsors();

  }

  private _fetchSponsors(): void {

    this.sponsorArray = this._findService
                            .list(this.event);

  }

  public selectSponsor(sponsor: Sponsor): void {

    this._sharedSponsorService
        .sharedSponsorFromListToInfo(sponsor);

  }

  public confirmDeleteAllSponsor(): void {}

  public editSponsor(sponsor: Sponsor): void {

    this._formService.launchModal({
      operation: Operation.Update,
      model: sponsor
    });

  }

}
