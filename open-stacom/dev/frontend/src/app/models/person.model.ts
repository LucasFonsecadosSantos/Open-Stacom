export class Person {

  id?:                string;
  name?:              string;
  avatar?:            string;
  job?:               string;
  brief?:             string;
  academicFormation?: string;
  institution?:       string;
  location?: {
    city?:    string,
    state?:   string,
    country?: string
  }
  socialNetworks?: {
    facebook?:        string,
    twitter?:         string,
    website?:         string,
    github?:          string,
    linkedin?:        string,
    spotify?:         string,
    lattes?:          string,
    email?:           string,
    whatsapp?:        string,
    behance?:         string,
    youtubeChannel?:  string
  }

}
