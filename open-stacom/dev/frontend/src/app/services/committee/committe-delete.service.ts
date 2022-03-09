import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Committee, Webpage } from 'src/app/models';
import { WebpageUpdateService } from '../webpage/webpage-update.service';

@Injectable({
  providedIn: 'root'
})
export class CommitteDeleteService {

  constructor(
    private _webpageUpdateService: WebpageUpdateService
  ) { }

  public delete(committee: Committee, webpage: Webpage): Observable<any> {

    return this._webpageUpdateService
                .update(this._getWebpage(committee, webpage));

  }

  public deleteAll(webpage: Webpage): Observable<any> {

    return this._webpageUpdateService
                .update(this._removeAllActivity(webpage));

  }

  private _removeAllActivity(webpage: Webpage): Webpage {

    webpage.template.objects.committee.content = [];
    return webpage;

  }

  private _getWebpage(committee: Committee, webpage: Webpage): Webpage {


    webpage.template.objects.committee.content.forEach(
      fetched => {
        if (fetched.id != committee.id) {
          fetched = null;
        }
      }
    );

      return webpage;

  }

  private _removeActivityFromWebpage(committee: Committee, webpage: Webpage): Committee[] {

    return webpage.template.objects.committee.content.filter(fetched => fetched.id != committee.id);

  }

}
