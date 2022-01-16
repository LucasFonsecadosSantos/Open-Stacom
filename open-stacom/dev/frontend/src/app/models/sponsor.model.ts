import { SponsorshipPlan } from "../enums/sponsorship-plan.enum";

export class Sponsor implements Model {

  id?: string;
  name?: string;
  picture?: string;
  brief?: string;
  website?: string;
  email?: string;
  telephone?: string;
  locationCep?: string
  locationAddress?: string;
  locationNumber?: string;
  locationNeiborhood?: string;
  locationCity?: string;
  locationUF?: string;
  locationCountry?: string;
  sponsorshipPlan?: SponsorshipPlan;

}
