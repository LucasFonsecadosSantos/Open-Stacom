import { Activity, ConfigRouteTemplate, FieldTemplate } from "."

export class ActivityTemplate implements Model {

  configRoute?: ConfigRouteTemplate;
  id?: FieldTemplate;
  title?: FieldTemplate;
  brief?: FieldTemplate;
  poweredBy?: FieldTemplate;
  responsible?: FieldTemplate;
  description?: FieldTemplate;
  picture?: FieldTemplate;
  targetPublic?: FieldTemplate;
  location?: FieldTemplate;
  price?: FieldTemplate;
  pricePlan?: FieldTemplate;
  content?: Activity[];

}
