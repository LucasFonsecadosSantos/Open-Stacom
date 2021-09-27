import { UrlService } from './../../services/utils/url.service';
import { PersonDeleteService } from './../../services/person/person-delete.service';
import { ExcelExportService } from './../../services/utils/excel-export.service';
import { PersonListComponent } from './../../components/person/person-list/person-list.component';
import { PersonPageService } from './person-page.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from 'src/app/models';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @ViewChild(PersonListComponent)
  private personListComponent: PersonListComponent;

  private _personArray: Person[];

  closeResult: string;

  constructor(
    private _modalService:        NgbModal,
    private _exportExcelService:  ExcelExportService,
    private _personDeleteService: PersonDeleteService,
    private _urlService:          UrlService
  ) { }

  ngOnInit(): void {


  }

  public open(content: any): void {
    this._modalService.open(content,
      {
        ariaLabelledBy: 'modal-basic-title',
        windowClass: 'modal-custom',
        size: 'lg',
        centered: true,
        modalDialogClass: 'modal-dialog-custom'


      }
    )
  }

  public exportExcel(): void {
    this._personArray = this.personListComponent.personArray;
    this._exportExcelService.exportExcel(this._personArray, 'LISTA_DE_PESSOAS');
  }

  public confirmDeleteAllPeople(dialog: any): void {
    this._modalService.open(dialog,
      {
        size: 'md'
      }
    );
  }

  public deleteAllPeople(): void {
    this._personDeleteService.deleteAll(this._urlService.getEventIDFromRoute());
  }


}
