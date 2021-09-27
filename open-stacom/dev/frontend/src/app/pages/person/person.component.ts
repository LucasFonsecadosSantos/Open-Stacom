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
    private modalService: NgbModal,
    private exportExcelService: ExcelExportService
  ) { }

  ngOnInit(): void {


  }

  open(content: any): void {
    this.modalService.open(content,
      {
        ariaLabelledBy: 'modal-basic-title',
        windowClass: 'modal-custom',
        size: 'lg',
        centered: true,
        modalDialogClass: 'modal-dialog-custom'


      }
    )
  }

  exportExcel(): void {
    this._personArray = this.personListComponent.personArray;
    this.exportExcelService.exportExcel(this._personArray, 'LISTA_DE_PESSOAS');
  }

  confirmDeleteAllPeople(dialog: any): void {
    this.modalService.open(dialog,
      {
        size: 'md'
      }
    )
  }

}
