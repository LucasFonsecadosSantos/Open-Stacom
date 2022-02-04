import { ConfigRouteTemplate, FieldTemplate, Proceeding } from "."

export class ProceedingTemplate implements Model {

  configRoute?: ConfigRouteTemplate;
  id?: FieldTemplate;
  code?: FieldTemplate;
  author?: FieldTemplate;
  title?: FieldTemplate;
  specialty?: FieldTemplate;
  file?: FieldTemplate;
  content?: Proceeding[];

}
