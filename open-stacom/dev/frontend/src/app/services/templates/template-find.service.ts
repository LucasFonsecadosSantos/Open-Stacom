import { Injectable } from '@angular/core';
import { Template, Webpage } from './../../models';

@Injectable({
  providedIn: 'root'
})
export class TemplateFindService {

  constructor(
    private _webpageFindService: Webpage
  ) { }

  public find(webpage: Webpage): Template {

    return webpage.template;

  }
}
