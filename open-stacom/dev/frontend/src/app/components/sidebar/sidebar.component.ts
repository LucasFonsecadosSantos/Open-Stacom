import { Component, Input, OnInit } from "@angular/core";
import { Event, Template } from "src/app/models";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {

  @Input()
  public event: Event;

  public menuItems: any[];

  constructor() {}

  ngOnInit() {

    this._buildNavbar();
    //this.menuItems = ROUTES.filter(menuItem => menuItem);

  }

  public isMobileMenu(): boolean {

    return (window.innerWidth <= 991);

  }

  private _buildNavbar(): void {

    this.menuItems = new Array();
    Object.keys(this.event.template.objects).forEach(
      entity => this._buildNavbarItem(this.event.template.objects[entity])
    );

  }

  private _buildNavbarItem(entity: any): void {

    this.menuItems.push(
      {
        path: `../${this.event.id}/${entity.configRoute.path}`,
        title: entity.configRoute.title,
        icon: entity.configRoute.icon,
        class: ""
      }
    );

  }

}
