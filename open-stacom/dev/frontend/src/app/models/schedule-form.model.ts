import { Operation } from "../enums";
import { Schedule } from "./schedule.model";

export class ScheduleForm {

  title?: string;
  schedule?: Schedule;
  operation?: Operation;

}
