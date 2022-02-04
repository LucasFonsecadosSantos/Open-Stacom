import { Committee, ConfigRouteTemplate, FieldTemplate } from "."

export class CommitteeTemplate implements Model {

  configRoute?: ConfigRouteTemplate;
  id?: FieldTemplate;
  name?: FieldTemplate;
  members?: FieldTemplate;
  picture?: FieldTemplate;
  brief?: FieldTemplate;
  telephone?: FieldTemplate;
  email?: FieldTemplate;
  content?: Committee[];

}
