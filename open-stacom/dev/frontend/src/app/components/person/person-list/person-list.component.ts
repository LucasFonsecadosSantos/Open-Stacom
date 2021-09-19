import { PersonFindService } from './../../../services/person/person-find.service';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  personArray: Person[];

  constructor(private personFindService: PersonFindService) { }

  ngOnInit(): void {

    this._listPeople();

  }

  private _listPeople(): void {

    this.personFindService.list().subscribe(

      response => {

        //TODO Build sources of person object
        this.personArray = response;

      }

    );

  }

}
