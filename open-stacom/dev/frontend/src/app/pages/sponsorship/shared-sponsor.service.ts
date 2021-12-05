import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Sponsor } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class SharedSponsorService {

  private _sponsorListSubject: Subject<any> = new Subject<any>();
  private _sponsorInfoSubject: Subject<any> = new Subject<any>();
  private _behaviorSponsorListSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this._sponsorListSubject);
  private _behaviorSponsorInfoSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this._sponsorInfoSubject);

  constructor() { }

  public sharedSponsorFromListToInfo(sponsor: Sponsor): void {
    this._sponsorListSubject.next(sponsor);
  }

  public shareSponsorFromInfoToForm(sponsor: Sponsor): void {
    this._sponsorInfoSubject.next(sponsor);
  }

  public getSponsorFromListObservable(): Observable<Sponsor> {
    return this._sponsorListSubject.asObservable();
  }

  public getSponsorFromList(): Sponsor {
    return this._behaviorSponsorListSubject.getValue();
  }

  public getSponsorFromInfoObservable(): Observable<Sponsor> {
    return this._sponsorInfoSubject.asObservable();
  }

  public getSponsorFromInfo(): Sponsor {
    return this._behaviorSponsorInfoSubject.getValue();
  }
}
