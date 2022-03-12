import { Component, Input, OnInit } from '@angular/core';
import {
  Event,
  Template,
  Webpage
} from './../../../models';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.scss']
})
export class EventInfoComponent implements OnInit {

  @Input()
  public webpage: Webpage;

  public event: Event;

  constructor() { }

  ngOnInit(): void {
    this.event = this.webpage.template.objects.event.content;
  }

}
