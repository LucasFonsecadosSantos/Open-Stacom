import { PersonPageService } from './person-page.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  closeResult: string;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {


  }

  open(content: any): void {
    this.modalService.open(content,
      {
        ariaLabelledBy: 'modal-basic-title',
        windowClass: 'modal-custom',
        size: 'lg',
        centered: true

      }
    )
  }

}
