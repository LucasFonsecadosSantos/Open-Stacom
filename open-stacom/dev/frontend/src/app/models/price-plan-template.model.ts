import { ConfigRouteTemplate, FieldTemplate, PricePlan } from "."

export class PricePlanTemplate implements Model {

  configRoute?: ConfigRouteTemplate;
  id?: FieldTemplate;
  name?: FieldTemplate;
  description?: FieldTemplate;
  value?: FieldTemplate;
  content?: PricePlan[];

}
