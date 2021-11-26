import { Component, OnInit } from "@angular/core";
import { EventFindService } from "src/app/services/event";
import { TemplateFindService } from "src/app/services/templates";
import { ActivatedRoute } from "@angular/router";
import {
  Template,
  Event
} from './../../models';
import {
  SharedEventService,
  SharedTemplateService
} from "src/app/services/shared/";

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
    private _sharedEventService: SharedEventService,
    private _sharedTemplateService: SharedTemplateService
  ) {}

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

    this._eventFindService.find(eventID).subscribe(event => {

      // this._sharedEventService.setEvent(event);
      this.event = event;
      this._getTemplateById(event.templateID);

    });

  }

  private _getTemplateById(templateID: string) {

    this._templateFindService.find(templateID).subscribe(

      template =>
         {
          //  this._sharedTemplateService.setTemplate(template);
          this.template = template;
           this.isDataLoaded = true;
          }

    );

  }

}
