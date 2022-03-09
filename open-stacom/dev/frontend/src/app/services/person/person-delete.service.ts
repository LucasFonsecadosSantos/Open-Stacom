import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Person, Webpage, Template } from './../../models';
import { WebpageUpdateService } from '../webpage/webpage-update.service';
@Injectable({
  providedIn: 'root'
})
export class PersonDeleteService {


  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public delete(person: Person, webpage: Webpage): Observable<any> {

    return this._webpageUpdateService
                .update(this._getWebpage(person, webpage));

  }

  public deleteAll(webpage: Webpage): Observable<any> {

    return this._webpageUpdateService
                .update(this._removeAllPerson(webpage));

  }

  private _removeAllPerson(webpage: Webpage): Webpage {

    webpage.template.objects.person.content = [];
    return webpage;

  }

  private _getWebpage(person: Person, webpage: Webpage): Webpage {

    webpage.template.objects.person.content = webpage.template.objects.person.content.filter(fetchedPerson => fetchedPerson.id != person.id);
    return webpage;

  }

  private _removePersonFromWebpage(person: Person, webpage: Webpage): Person[] {

    return webpage.template.objects.person.content.filter(fetched => fetched.id != person.id);

  }

}
