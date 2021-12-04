import { Person, PricePlan } from ".";
import { ActivityType } from "../enums";

export class Activity {

  id?: string;
  type?: ActivityType;
  title?: string;
  brief?: string;
  poweredBy?: string;
  responsible?: Person;
  description?: string;
  picture?: string;
  targetPublic?: string;
  location?: string;
  price?: string;
  pricePlan?: PricePlan;

}
