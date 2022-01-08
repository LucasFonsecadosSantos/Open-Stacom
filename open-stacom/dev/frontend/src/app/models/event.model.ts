import { Template } from "./../models";

export class Event {

  id?: string;
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
  telephones?: [
    {
      name: string,
      number: string
    }
  ]
  poweredBy?: {
    institution?: string;
    departament?: string;
  }
  days?: Date[];
  locationCep?: string;
  locationAddress?: string;
  locationNumber?: string;
  locationNeiborhood?: string;
  locationCity?: string;
  locationUF?: string;
  locationCountry?: string;
  locationLatLong?: string;
  socialNetworks?: {
    facebook?: string,
    twitter?: string,
    github?: string,
    linkedin?: string,
    spotify?: string,
    whatsapp?: string,
    behance?: string,
    youtubeChannel?: string
  };
  template: Template;

}
