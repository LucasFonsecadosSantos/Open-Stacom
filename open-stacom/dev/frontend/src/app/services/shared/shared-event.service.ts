import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, Subject } from 'rxjs';
import { Event } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class SharedEventService {

  private _subject: BehaviorSubject<Event> = new BehaviorSubject<Event>(undefined);

  constructor() { }

  public setEvent(event: Event): void {
    console.log(event.id);
    this._subject.next(event);
  }

  public getEvent(): Event {
    return this._subject.value;
  }

  public getEventObservable(): Observable<Event> {
    return this._subject.asObservable()
  }

}
