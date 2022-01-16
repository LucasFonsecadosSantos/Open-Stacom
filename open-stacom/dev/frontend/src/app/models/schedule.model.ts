import { Time } from "@angular/common";
import { Activity } from ".";

export class Schedule implements Model {

  id?: string;
  date?: Date;
  startTime?: Time;
  endTime?: Time;
  activity?: Activity

}
