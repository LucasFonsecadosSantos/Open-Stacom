import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Template, Event } from 'src/app/models';
import { EventFindService } from 'src/app/services/event';
import { TemplateFindService } from 'src/app/services/templates';
import { ExcelExportService } from 'src/app/services/utils';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  public isDataLoaded: boolean = false;
  public event: Event;
  public entityDownloadURL: SafeUrl;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _exportService: ExcelExportService,
    private _eventFindService: EventFindService,
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {

    this._getEventAndTemplate();

  }


  public exportToExcel(event: Event): void {

    this._exportService.exportExcel([event], `DADOS_DE_${event.name}`);

  }

  public exportToPDF(event: Event): void {
    //TODO
  }

  public downloadEntitySource(): void {
    let fileName: string = this.event.name;
    let data = JSON.stringify(this.event);
    this.entityDownloadURL = this._sanitizer.bypassSecurityTrustUrl(
      `data:text/json;charset=UTF-8,${encodeURIComponent(data)}`
    );
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

}
