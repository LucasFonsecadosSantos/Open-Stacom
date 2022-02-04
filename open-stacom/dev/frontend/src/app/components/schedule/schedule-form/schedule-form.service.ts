import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Schedule, FormModel } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class ScheduleFormService {

  private subject:          Subject<any> = new Subject<any>();
  private subjectResponse:  Subject<any> = new Subject<any>();

  public scheduleForm: FormModel

  constructor() { }

  public launchModal(scheduleFormModel: FormModel) {
    this.subject.next(scheduleFormModel);
  }

  public submitOperation(schedule: Schedule): void {
    this.subjectResponse.next(true);
  }

  public getObservable(): Observable<any> {
    return this.subject.asObservable();
  }

  public getResponseObservable(): Observable<any> {
    return this.subjectResponse.asObservable();
  }

}
