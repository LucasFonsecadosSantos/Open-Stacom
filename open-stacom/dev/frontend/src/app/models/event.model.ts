export class Event {

  id?:            string;
  name?:          string;
  edition?:       string;
  subject?:       string;
  eventType?:     string;
  targetPublic?:  string;
  templateID?:    string;
  logo?:          string;
  description?:   string;
  brief?:         string;
  website?:       string;
  email?:         string;
  telephones?: [
    {
      name:   string,
      number: string
    }
  ]
  poweredBy?: {
    institution?: string;
    departament?: string;
  }
  days?: [
    {
      date?:  string;
      month?: string;
      year?:  string;
    }
  ];
  location?: {
    cep?:         string;
    street?:      string;
    number?:      string;
    neiborhood?:  string;
    city?:        string;
    state?:       string;
    country?:     string;
    latLong?:     string;
  };
  socialNetworks?: {
    facebook?:        string,
    twitter?:         string,
    github?:          string,
    linkedin?:        string,
    spotify?:         string,
    whatsapp?:        string,
    behance?:         string,
    youtubeChannel?:  string
  };

}
