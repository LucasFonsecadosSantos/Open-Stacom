import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Committee, Webpage } from 'src/app/models';
import { v4 as uuidv4 } from 'uuid';
import { WebpageUpdateService } from '../webpage/webpage-update.service';

@Injectable({
  providedIn: 'root'
})
export class CommitteCreateService {

  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public create(committee: Committee, webpage: Webpage): Observable<any> {

    return this._webpageUpdateService
                .update(this._addDataToWebpage(committee, webpage));

  }

  private _addDataToWebpage(committee: Committee, webpage: Webpage): Webpage {



    committee.id = uuidv4();

    committee.members.forEach(member => {
      member = {'id': member.id};
    });


          webpage.template
          .objects
          .committee
          .content
          .push(committee);


    webpage.template
          .objects
          .committee
          .content
          .forEach(instance => {

            instance.members = instance.members.filter(obj =>
              Object.keys(obj).length == 1
            );

          });
    return webpage;

  }

}
