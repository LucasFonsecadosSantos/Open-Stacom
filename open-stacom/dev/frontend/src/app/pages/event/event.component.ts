import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Template, Event, Webpage } from 'src/app/models';
import { ExcelExportService } from 'src/app/services/utils';
import { WebpageFindService } from 'src/app/services/webpage/webpage-find.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  public isDataLoaded: boolean = false;
  public webpage: Webpage;
  public entityDownloadURL: SafeUrl;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _exportService: ExcelExportService,
    private _webpageFindService: WebpageFindService,
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {

    this._getWebpageFromParam();

  }


  public exportToExcel(event: Event): void {

    this._exportService.exportExcel([event], `DADOS_DE_${event.name}`);

  }

  public exportToPDF(event: Event): void {
    //TODO
  }

  public downloadEntitySource(): void {
    let fileName: string = this.webpage.template.objects.event.content.name;
    let data = JSON.stringify(this.webpage);
    this.entityDownloadURL = this._sanitizer.bypassSecurityTrustUrl(
      `data:text/json;charset=UTF-8,${encodeURIComponent(data)}`
    );
  }

  private _getWebpageFromParam(): void {

    this._activatedRoute.paramMap.subscribe(

      params => {
        this._getWebpage(params.get('webpageID'));
      }

    );
  }

  private _getWebpage(webpageID: string): void {

    this._webpageFindService
        .find(webpageID)
        .subscribe(
          webpage => {
            this.webpage = webpage;
            //this.event = webpage.template.objects.event.content;
            this.isDataLoaded = true;
          }
        );
  }

}
