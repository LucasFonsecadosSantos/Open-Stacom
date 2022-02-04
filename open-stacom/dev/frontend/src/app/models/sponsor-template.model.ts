import { ConfigRouteTemplate, FieldTemplate, Sponsor } from "."

export class SponsorTemplate implements Model {

  configRoute?: ConfigRouteTemplate;
  id?: FieldTemplate;
  name?: FieldTemplate;
  website?: FieldTemplate;
  email?: FieldTemplate;
  telephone?: FieldTemplate;
  locationCity?: FieldTemplate;
  locationCep?: FieldTemplate;
  locationCountry?: FieldTemplate;
  locationAddress?: FieldTemplate;
  locationNumber?: FieldTemplate;
  locationNeiborhood?: FieldTemplate;
  brief?: FieldTemplate;
  picture?: FieldTemplate;
  sponsorshipPlan?: FieldTemplate;
  content?: Sponsor[];

}
