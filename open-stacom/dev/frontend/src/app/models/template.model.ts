import {
  ActivityTemplate,
  EventTemplate,
  PastEditionTemplate,
  PersonTemplate,
  PricePlanTemplate,
  ProceedingTemplate,
  ScheduleTemplate,
  SponsorTemplate,
  CommitteeTemplate
} from ".";

export class Template implements Model {

  id?:          string;
  name?:        string;
  path?:        string;
  author?:      string;
  description?: string;
  avatar?:      string;
  mockup?:      string;
  engine?:      string;
  sections?:    [];
  objects?:     {
    proceeding?: ProceedingTemplate;
    sponsor?: SponsorTemplate;
    schedule?: ScheduleTemplate;
    committee?: CommitteeTemplate;
    activity?: ActivityTemplate;
    pricePlan?: PricePlanTemplate;
    pastEdition?: PastEditionTemplate;
    event?: EventTemplate;
    person?: PersonTemplate;
  };

}
