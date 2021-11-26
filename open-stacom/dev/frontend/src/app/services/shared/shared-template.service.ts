import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Template } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class SharedTemplateService {

  private _subject: Subject<any> = new Subject<any>();
  private _behaviorSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this._subject);

  constructor() { }

  public setTemplate(template: Template): void {
    this._subject.next(template);
  }

  public getTemplateObservable(): Observable<Template> {
    return this._subject.asObservable();
  }

  public getTemplate(): Template {
    return this._behaviorSubject.getValue();
  }

}
