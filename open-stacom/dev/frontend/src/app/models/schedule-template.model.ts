import { ConfigRouteTemplate, FieldTemplate, Schedule } from "."

export class ScheduleTemplate implements Model {

  configRoute?: ConfigRouteTemplate;
  id?: FieldTemplate;
  activity?: FieldTemplate;
  startTime?: FieldTemplate;
  endTime?: FieldTemplate;
  date?: FieldTemplate;
  content?: Schedule[];

}
