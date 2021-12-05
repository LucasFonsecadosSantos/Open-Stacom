import { Time } from "@angular/common";
import { Activity } from ".";

export class Schedule {

  id?: string;
  date?: Date;
  startTime?: Time;
  endTime?: Time;
  activity?: Activity

}
