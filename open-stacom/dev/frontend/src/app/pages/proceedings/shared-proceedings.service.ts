import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Proceeding } from 'src/app/models/proceeding.model';

@Injectable({
  providedIn: 'root'
})
export class SharedProceedingsService {

  private _proceedingListSubject: Subject<any> = new Subject<any>();
  private _proceedingInfoSubject: Subject<any> = new Subject<any>();
  private _behaviorProceedingListSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this._proceedingListSubject);
  private _behaviorProceedingInfoSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this._proceedingInfoSubject);

  constructor() { }

  public sharedProceedingFromListToInfo(proceeding: Proceeding): void {
    this._proceedingListSubject.next(proceeding);
  }

  public shareProceedingFromInfoToForm(proceeding: Proceeding): void {
    this._proceedingInfoSubject.next(proceeding);
  }

  public getProceedingFromListObservable(): Observable<Proceeding> {
    return this._proceedingListSubject.asObservable();
  }

  public getProceedingFromList(): Proceeding {
    return this._behaviorProceedingListSubject.getValue();
  }

  public getProceedingFromInfoObservable(): Observable<Proceeding> {
    return this._proceedingInfoSubject.asObservable();
  }

  public getProceedingFromInfo(): Proceeding {
    return this._behaviorProceedingInfoSubject.getValue();
  }
}
