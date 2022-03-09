import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Person, Webpage } from 'src/app/models';
import { v4 as uuidv4 } from 'uuid';
import { WebpageUpdateService } from '../webpage/webpage-update.service';

@Injectable({
  providedIn: 'root'
})
export class PersonCreateService {

  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public create(person: Person, webpage: Webpage): Observable<any> {

    return this._webpageUpdateService.update(this._addDataToWebpage(person, webpage));

  }

  private _addDataToWebpage(person: Person, webpage: Webpage): Webpage {

    person.id = uuidv4();

    webpage.template
          .objects
          .person
          .content
          .push(person);

    return webpage;

  }

}
