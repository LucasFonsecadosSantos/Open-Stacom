import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable  } from 'rxjs';

@Component({
  selector: 'app-load-project',
  templateUrl: './load-project.component.html',
  styleUrls: ['./load-project.component.scss']
})
export class LoadProjectComponent implements OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  filesInfo?: Observable<any>;

  constructor() { }

  ngOnInit(): void {
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {

      const file: File | null = this.selectedFiles.item(0);

      //call service

    }
  }

}
