import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(
    private _route:                ActivatedRoute
  ) { }

  public getEventIDFromRoute(): string {
    return this._route.snapshot.params['eventID'];
  }
}
