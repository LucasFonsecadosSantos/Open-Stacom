import { Component, Input, OnInit } from "@angular/core";
import { Event, Template } from "src/app/models";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/icons",
    title: "Icons",
    rtlTitle: "الرموز",
    icon: "icon-atom",
    class: ""
  },
  {
    path: "/maps",
    title: "Maps",
    rtlTitle: "خرائط",
    icon: "icon-pin",
    class: "" },
  {
    path: "/notifications",
    title: "Notifications",
    rtlTitle: "إخطارات",
    icon: "icon-bell-55",
    class: ""
  },

  {
    path: "/user",
    title: "User Profile",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/tables",
    title: "Table List",
    rtlTitle: "قائمة الجدول",
    icon: "icon-puzzle-10",
    class: ""
  },
  {
    path: "/typography",
    title: "Typography",
    rtlTitle: "طباعة",
    icon: "icon-align-center",
    class: ""
  },
  {
    path: "/rtl",
    title: "RTL Support",
    rtlTitle: "ار تي ال",
    icon: "icon-world",
    class: ""
  }
];

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
