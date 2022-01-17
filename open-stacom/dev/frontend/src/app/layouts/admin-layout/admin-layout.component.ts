import { Component, HostListener, OnInit } from "@angular/core";
import { EventCloseService, EventFindService } from "src/app/services/event";
import { TemplateFindService } from "src/app/services/templates";
import { ActivatedRoute, Router } from "@angular/router";
import {
  Template,
  Event
} from './../../models';

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"]
})
export class AdminLayoutComponent implements OnInit {

  public sidebarColor: string = "red";

  public isDataLoaded: boolean = false;

  public event: Event;

  public template: Template;

  constructor(
    private _eventFindService: EventFindService,
    private _templateFindService: TemplateFindService,
    private _activatedRoute: ActivatedRoute,
    private _closeEventService: EventCloseService,
    private _router: Router
  ) {}


  @HostListener('window:beforeunload', ['$event'])
  onWindowClose(event: any): void {


    event.preventDefault();
    event.returnValue = false;
    this._closeEventService.closeEvent(this.event.id);
    let result = confirm(`Deseja realmente sair e deletar o evento ${this.event.id}`)

  }

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

    this._getEventAndTemplate();

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
        .subscribe({
          next: event => {
            this.event = event;
            this._getTemplateById(event);
          },
          error: exception => {
            this._router.navigate([`/`]);
          }
        });
  }

  private _getTemplateById(event: Event): void {

    this.template = this._templateFindService
                        .find(event);
      this.isDataLoaded = true;

  }

}
