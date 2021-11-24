import { Injectable } from '@angular/core';
import { 
  Person,
  Event,
  Template
} from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class SharedInformationService {

  private _event: Event;
  private _person:  Person[];
  private _template: Template;

  constructor() { }

  public getEvent(): Event { alert("chamou"); return this._event; }

  public getPerson(): Person[] { return this._person; }

  public getTemplate(): Template { return this._template; }

  public setEvent(event: Event): void { this._event = event; }
d
  public setPerson(person: Person[]): void { this._person = person; }

  public setTemplate(template: Template): void { this._template = template; }

}
