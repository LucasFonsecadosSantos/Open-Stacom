import { Template } from "./../models";

export class Event implements Model {

  id?: string;
  token?: string;
  name?: string;
  edition?: string;
  subject?: string;
  eventType?: string;
  targetPublic?: string;
  logo?: string;
  description?: string;
  brief?: string;
  website?: string;
  email?: string;
  telephones?: {
    name: string,
    number: string
  }[]
  poweredByInstitution?: string;
  poweredByDepartment?: string;
  days?: Date[];
  locationCep?: string;
  locationAddress?: string;
  locationNumber?: string;
  locationNeiborhood?: string;
  locationCity?: string;
  locationUF?: string;
  locationCountry?: string;
  locationLatLong?: string;
  socialNetworkFacebook?: string;
  socialNetworkTwitter?: string;
  socialNetworkGithub?: string;
  socialNetworkLinkedin?: string;
  socialNetworkSpotify?: string;
  socialNetworkWhatsapp?: string;
  socialNetworkBehance?: string;
  socialNetworkYoutubeChannel?: string;
  template: Template;

}
