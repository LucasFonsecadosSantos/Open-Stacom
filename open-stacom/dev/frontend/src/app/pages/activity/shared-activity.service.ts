import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Activity } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class SharedActivityService {

  private _activityListSubject: Subject<any> = new Subject<any>();
  private _activityInfoSubject: Subject<any> = new Subject<any>();
  private _behaviorActivityListSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this._activityListSubject);
  private _behaviorActivityInfoSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this._activityInfoSubject);

  constructor() { }

  public sharedActivityFromListToInfo(activity: Activity): void {
    this._activityListSubject.next(activity);
  }

  public shareActivityFromInfoToForm(activity: Activity): void {
    this._activityInfoSubject.next(activity);
  }

  public getActivityFromListObservable(): Observable<Activity> {
    return this._activityListSubject.asObservable();
  }

  public getActivityFromList(): Activity {
    return this._behaviorActivityListSubject.getValue();
  }

  public getActivityFromInfoObservable(): Observable<Activity> {
    return this._activityInfoSubject.asObservable();
  }

  public getActivityFromInfo(): Activity {
    return this._behaviorActivityInfoSubject.getValue();
  }
}
