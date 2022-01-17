import { ConfigRouteTemplate, FieldTemplate, PreviousEdition } from "."

export class PastEditionTemplate implements Model {

  configRoute?: ConfigRouteTemplate;
  id?: FieldTemplate;
  name?: FieldTemplate;
  logo?: FieldTemplate;
  link?: FieldTemplate;
  date?: FieldTemplate;
  content?: PreviousEdition[];

}
