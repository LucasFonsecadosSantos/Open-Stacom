import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event, Template, Webpage } from 'src/app/models';
import { WebpageFindService } from 'src/app/services/webpage/webpage-find.service';

@Component({
  selector: 'app-cadastre-event',
  templateUrl: './cadastre-event.component.html',
  styleUrls: ['./cadastre-event.component.scss']
})
export class CadastreEventComponent implements OnInit {

  public isDataLoaded: boolean = false;

  public template: Template;

  public webpage: Webpage;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _webpageFindService: WebpageFindService
  ) { }

  ngOnInit(): void {

    this._getWebapageFromParam();

  }

  private _getWebapageFromParam(): void {

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
            this.template = webpage.template;
            this.isDataLoaded = true;
          }
        );
  }

}
