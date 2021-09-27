import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(
    private _route:                ActivatedRoute,
    private _router:               Router
  ) { }

  public getEventIDFromRoute(): string {
    return this._route.snapshot.params['eventID']
  }
}
