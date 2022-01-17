import { ConfigRouteTemplate, FieldTemplate, Person } from "."

export class PersonTemplate implements Model {

  configRoute?: ConfigRouteTemplate;
  id?: FieldTemplate;
  name?: FieldTemplate;
  avatar?: FieldTemplate;
  job?: FieldTemplate;
  academicFormation?: FieldTemplate;
  institution?: FieldTemplate;
  locationNeiborhood?: FieldTemplate;
  locationNumber?: FieldTemplate;
  locationAddress?: FieldTemplate;
  locationCep?: FieldTemplate;
  locationCity?: FieldTemplate;
  locationUF?: FieldTemplate;
  locationCountry?: FieldTemplate;
  socialNetworkFacebook?: FieldTemplate;
  socialNetworkTwitter?: FieldTemplate;
  socialNetworkGithub?: FieldTemplate;
  socialNetworkSpotify?: FieldTemplate;
  socialNetworkLinkedin?: FieldTemplate;
  socialNetworkWebsite?: FieldTemplate;
  socialNetworkEmail?: FieldTemplate;
  socialNetworkWhatsapp?: FieldTemplate;
  socialNetworkBehance?: FieldTemplate;
  socialNetworkYoutubeChannel?: FieldTemplate;
  content?: Person[];

}
