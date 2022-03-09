import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Person, Webpage } from 'src/app/models';
import { WebpageUpdateService } from '../webpage/webpage-update.service';

@Injectable({
  providedIn: 'root'
})
export class PersonUpdateService {

  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public update(person: Person, webpage: Webpage): Observable<any> {

    return this._webpageUpdateService.update(this._updateDataToWebpage(person, webpage));

  }

  private _updateDataToWebpage(person: Person, webpage: Webpage): Webpage {

    webpage.template.objects.person.content = webpage.template.objects
                  .person
                  .content
                  .filter(
                    fetchedSchedule => fetchedSchedule.id != person.id
                  );

    webpage.template
         .objects
         .person
         .content
         .push(person);

    return webpage;

  }

}
