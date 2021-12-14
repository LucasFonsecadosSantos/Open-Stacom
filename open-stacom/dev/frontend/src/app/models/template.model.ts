import { Activity, Committee, Person, PreviousEdition, PricePlan, Proceeding, Sponsor } from ".";
import { Schedule } from "./schedule.model";

export class Template {

  id?:          string;
  name?:        string;
  path?:        string;
  author?:      string;
  description?: string;
  avatar?:      string;
  mockup?:      string;
  sections?:    [];
  objects?:     {
    proceeding?: {
      configRoute?: {
        title?: string,
        path?: string,
        icon?: string
      },
      id?: {
        required?: boolean,
      },
      code?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      author?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      title?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      specialty?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      file?: {
        required?: boolean,
      },
      content?: Proceeding[];
    },
    sponsor?: {
      configRoute?: {
        title?: string,
        path?: string,
        icon?: string
      },
      id?: {
        required?: boolean,
      },
      name?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      website?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      email?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      telephone?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationCity?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationCep?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationUF?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationCountry?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationAddress?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationNumber?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationNeiborhood?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      brief?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      picture?: {
        required?: boolean,
      },
      sponsorshipPlan?: {
        required?: boolean,
      },
      content?: Sponsor[];
    },
    schedule?: {
      configRoute?: {
        title?: string,
        path?: string,
        icon?: string
      },
      id?: {
        required?: boolean,
      },
      activity?: {
        required?: boolean;
      }
      startTime?: {
        required?: boolean;
      },
      endTime?: {
        required?: boolean;
      },
      date?: {
        required?: boolean;
      },
      content?: Schedule[];
    },
    committee?: {
      configRoute?: {
        title?: string,
        path?: string,
        icon?: string
      },
      id?: {
        required?: boolean,
      },
      name?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      members?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      picture?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      brief?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      telephone?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      email?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      content?: Committee[];
    },
    activity?: {
      configRoute?: {
        title?: string,
        path?: string,
        icon?: string
      },
      id?: {
        required?: boolean,
      },
      title?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      brief?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      poweredBy?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      responsible?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      description?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      picture?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      targetPublic?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      location?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      price?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      pricePlan?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      content?: Activity[];
    },
    pricePlan?: {
      configRoute?: {
        title?: string,
        path?: string,
        icon?: string
      },
      id?: {
        required?: boolean,
      },
      name?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      description?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      value?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      content?: PricePlan[];
    },
    pastEdition?: {
      configRoute?: {
        title?: string,
        path?: string,
        icon?: string
      },
      id?: {
        required?: boolean,
      },
      name?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      logo?: {
        required?: boolean
      },
      link?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean
      },
      date?: {
        required?: boolean
      },
      content?: PreviousEdition[];
    },
    event?: {
      configRoute?: {
        title?: string,
        path?: string,
        icon?: string
      },
      id?: {
        required?: boolean,
      },
      name?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      edition?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      eventType?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      poweredByInstitution?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      poweredByDepartament?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      subject?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      targetPublic?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      logo?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      brief?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      description?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      telephoneName?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      telephoneNumber?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      days?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      website?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      email?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      socialNetworksFacebook?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      socialNetworksTwitter?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      socialNetworksGithub?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      socialNetworksSpotify?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      socialNetworksLinkedin?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      socialNetworksWhatssapp?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      socialNetworksBehance?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      socialNetworksYoutubeChannel?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationCep?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationAddress?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationNumber?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationNeiborhood?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationCity?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationUF?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationCountry?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationLatLong?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      }
    },
    person?: {
      configRoute?: {
        title?: string,
        path?: string,
        icon?: string
      },
      id?: {
        required?: boolean,
      },
      name?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      avatar?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      job?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      academicFormation?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      institution?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationNeiborhood?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationNumber?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationAddress?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationCep?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationCity?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationState?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      locationCountry?: {
        minlength?: number,
        maxlength?: number,
        required?: boolean,
      },
      content?: Person[];
    }
  };

}
