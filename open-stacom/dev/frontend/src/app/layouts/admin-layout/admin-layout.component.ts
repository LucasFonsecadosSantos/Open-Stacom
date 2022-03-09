import { Component, HostListener, OnInit } from "@angular/core";
import { EventCloseService, EventFindService } from "src/app/services/event";
import { TemplateFindService } from "src/app/services/templates";
import { ActivatedRoute, Router } from "@angular/router";
import {
  Template,
  Event,
  Webpage
} from './../../models';
import { WebpageFindService } from "src/app/services/webpage/webpage-find.service";

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"]
})
export class AdminLayoutComponent implements OnInit {

  public sidebarColor: string = "red";

  public isDataLoaded: boolean = false;

  public webpage: Webpage;

  constructor(
    private _webpageFindService: WebpageFindService,
    private _activatedRoute: ActivatedRoute,
    private _closeEventService: EventCloseService,
    private _router: Router
  ) {}


  // @HostListener('window:beforeunload', ['$event'])
  // onWindowClose(event: any): void {


  //   event.preventDefault();
  //   event.returnValue = false;
  //   this._closeEventService.closeEvent(this.event.id);
  //   let result = confirm(`Deseja realmente sair e deletar o evento ${this.event.id}`)

  // }

  public changeSidebarColor(color): void {

    var sidebar = document.getElementsByClassName('sidebar')[0];
    var mainPanel = document.getElementsByClassName('main-panel')[0];

    this.sidebarColor = color;

    if(sidebar != undefined){
        sidebar.setAttribute('data',color);
    }
    if(mainPanel != undefined){
        mainPanel.setAttribute('data',color);
    }
  }

  public changeDashboardColor(color): void {
    var body = document.getElementsByTagName('body')[0];
    if (body && color === 'white-content') {
        body.classList.add(color);
    }
    else if(body.classList.contains('white-content')) {
      body.classList.remove('white-content');
    }
  }

  ngOnInit() {

    this._getWebpageFromParam();

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
          {
            next: webpage => {
              this.webpage = webpage;
              this.isDataLoaded = true;
          },
          error: exception => {
            this._router.navigate([`/`]);
          }
        });
  }

}
