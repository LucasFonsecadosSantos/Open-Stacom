import { Person } from "."

export class Committee implements Model {

  id?: string;
  name?: string;
  members?: Person[];
  picture?: string;
  brief?: string;
  telephone?: string;
  email?: string;

}
