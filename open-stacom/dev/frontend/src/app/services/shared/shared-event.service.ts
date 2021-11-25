import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Event } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class SharedEventService {

  private _subject: Subject<any> = new Subject<any>();
  private _behaviorSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this._subject);

  constructor() { }

  public setEvent(event: Event): void {
    this._subject.next(event);
  }

  public getEvent(): Event {
    return this._behaviorSubject.getValue();
  }

  public getEventObservable(): Observable<Event> {
    return this._subject.asObservable()
  }

}
