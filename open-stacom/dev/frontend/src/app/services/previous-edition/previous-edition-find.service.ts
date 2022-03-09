import { Injectable } from '@angular/core';
import { PreviousEdition, Webpage } from 'src/app/models';
import { environment } from 'src/environments/environment';
import { WebpageFindService } from '../webpage/webpage-find.service';

@Injectable({
  providedIn: 'root'
})
export class PreviousEditionFindService {

  constructor(
    private _webpageFindService: WebpageFindService
  ) { }

  public list(webpage: Webpage): PreviousEdition[] {

    let edition: PreviousEdition[] = webpage.template.objects.pastEdition.content;
    this._buildSources(edition, webpage);

    return edition;

  }

  private _getByID(id: string, array: PreviousEdition[]): PreviousEdition {

    return array.find(entity => entity.id == id);

  }

  private _buildSources(editionsArray: PreviousEdition[], webpage: Webpage): PreviousEdition[] {

    editionsArray.forEach(edition => {
      edition.logo = this._buildEditionAvatarSource(edition.logo, webpage.id);
    })

    return editionsArray;

  }

  private _buildEditionAvatarSource(editionAvatar: string, webpageID: string): string {

    return (editionAvatar && (editionAvatar != null) && (editionAvatar.length > 0)) ?
            editionAvatar = `/data/${webpageID}/img/avatar/${editionAvatar}` :
            environment.DEFAULT_AVATAR_PICTURE_PATH;

  }


}
