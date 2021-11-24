import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Person } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class SharedPersonService {

  private _subject: Subject<any> = new Subject<any>();
  private _behaviorSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this._subject);

  constructor() { }

  public setPerson(person: Person): void {
    this._subject.next(person);
  }

  public getPersonObservable(): Observable<Person> {
    return this._behaviorSubject.asObservable();
  }

}
