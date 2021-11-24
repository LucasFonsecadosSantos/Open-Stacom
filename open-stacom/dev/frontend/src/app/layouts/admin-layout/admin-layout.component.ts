import { Component, OnInit } from "@angular/core";
import { EventFindService } from "src/app/services/event";
import { TemplateFindService } from "src/app/services/templates";
import { ActivatedRoute } from "@angular/router";
import { Template, Event } from "src/app/models";
import { SharedInformationService } from "src/app/services/shared";

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"]
})
export class AdminLayoutComponent implements OnInit {
  
  public sidebarColor: string = "red";

  template:       Template;
  event:          Event;
  
  constructor(
    private _eventFindService:          EventFindService,
    private _templateFindService:       TemplateFindService,
    private _activatedRoute:            ActivatedRoute,
    private _sharedInformationService:  SharedInformationService
  ) {}

  changeSidebarColor(color){
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
  changeDashboardColor(color){
    var body = document.getElementsByTagName('body')[0];
    if (body && color === 'white-content') {
        body.classList.add(color);
    }
    else if(body.classList.contains('white-content')) {
      body.classList.remove('white-content');
    }
  }
  ngOnInit() {
    this._getEventID();
  }

  private _getEventID(): void {

    this._activatedRoute.paramMap.subscribe(
      params => {
        this._getTemplate(params.get('eventID'));
      }
    );
  }

  private _getTemplate(eventID: string): void {

    this._eventFindService.find(eventID).subscribe(
      eventResponse => {
        // this._sharedInformationService.eventresponse;
        this.event = eventResponse;
        this._getTemplateById(eventResponse.templateID);
      }
    );
  }

  private _getTemplateById(templateID: string) {

    this._templateFindService.find(templateID)
      .subscribe(
        templateReponse => this.template = templateReponse
      );

  }

}
