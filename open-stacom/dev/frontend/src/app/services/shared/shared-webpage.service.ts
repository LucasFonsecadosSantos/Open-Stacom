import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, Subject } from 'rxjs';
import { Webpage } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class SharedWebpageService {

  private _subject: BehaviorSubject<Webpage> = new BehaviorSubject<Webpage>(undefined);

  constructor() { }

  public setWebpage(webpage: Webpage): void {
    this._subject.next(webpage);
  }

  public getWebpage(): Webpage {
    return this._subject.value;
  }

  public getWebpageObservable(): Observable<Webpage> {
    return this._subject.asObservable()
  }

}
