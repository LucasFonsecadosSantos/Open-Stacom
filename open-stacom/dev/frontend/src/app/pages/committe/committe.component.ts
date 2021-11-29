import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventFindService } from 'src/app/services/event';
import { TemplateFindService } from 'src/app/services/templates';
import {
  Template,
  Event
} from './../../models';

@Component({
  selector: 'app-committe',
  templateUrl: './committe.component.html',
  styleUrls: ['./committe.component.scss']
})
export class CommitteComponent implements OnInit {

  public event: Event;
  public template: Template;
  public isDataLoaded: boolean = false;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _eventFindService: EventFindService,
    private _templateFindService: TemplateFindService
  ) { }

  ngOnInit(): void {

    this._getEventAndTemplate();
    this._getResponseObservables();

  }


  private _getEventAndTemplate(): void {

    this._activatedRoute.paramMap.subscribe(

      params => {
        this._getEvent(params.get('eventID'));
      }

    );
  }

  private _getEvent(eventID: string): void {

    this._eventFindService.find(eventID).subscribe(event => {

      this.event = event;
      this._getTemplateById(event.templateID);

    });

  }

  private _getTemplateById(templateID: string) {

    this._templateFindService.find(templateID).subscribe(

      template =>
         {
           this.template = template;
           this.isDataLoaded = true;
          }

    );
  }

  public openAddPersonForm(): void {

    this._personFormService.launchModal({
      operation: Operation.Create
    });

  }

  public exportExcel(): void {
    this._personArray = this.personListComponent.personArray;
    this._exportExcelService.exportExcel(this._personArray, 'LISTA_DE_PESSOAS');
  }

  public confirmDeleteAllPeople(): void {

    this._confirmDialogService.launchConfirmDialog(
      {
        acceptButton: 'Sim, estou ciente e desejo continuar.',
        cancelButton: 'Cancelar',
        message: 'Você realmente deseja EXCLUIR TODAS AS PESSOAS registradas no sistema?',
        title: 'Antes de prosseguir...'
      }
    );
  }
}
