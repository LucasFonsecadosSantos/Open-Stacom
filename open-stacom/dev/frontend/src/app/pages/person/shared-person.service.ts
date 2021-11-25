import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Person } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class SharedPersonService {

  private _personListSubject: Subject<any> = new Subject<any>();
  private _personInfoSubject: Subject<any> = new Subject<any>();
  private _behaviorPersonListSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this._personListSubject);
  private _behaviorPersonInfoSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this._personInfoSubject);

  constructor() { }

  public sharedPersonFromListToInfo(person: Person): void {
    this._personListSubject.next(person);
  }

  public sharePersonFromInfoToForm(person: Person): void {
    this._personInfoSubject.next(person);
  }

  public getPersonFromListObservable(): Observable<Person> {
    return this._personListSubject.asObservable();
  }

  public getPersonFromList(): Person {
    return this._behaviorPersonListSubject.getValue();
  }

  public getPersonFromInfoObservable(): Observable<Person> {
    return this._personInfoSubject.asObservable();
  }

  public getPersonFromInfo(): Person {
    return this._behaviorPersonInfoSubject.getValue();
  }
}
