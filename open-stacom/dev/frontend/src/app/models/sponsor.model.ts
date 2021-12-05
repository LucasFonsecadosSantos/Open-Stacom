import { SponsorshipPlan } from "../enums/sponsorship-plan.enum";

export class Sponsor {

  id?: string;
  name?: string;
  picture?: string;
  brief?: string;
  website?: string;
  email?: string;
  telephone?: string;
  location?: {
    cep?: string;
    address?: string;
    number?: string;
    neiborhood?: string;
    city?: string;
    uf?: string;
    country?: string;
  }
  sponsorshipPlan?: SponsorshipPlan;

}
