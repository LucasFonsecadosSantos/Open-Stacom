import { Template } from './template.model';
import { Operation } from "../enums";
import { Person } from "./person.model";

export class PersonForm {

  title?:     string;
  person?:    Person;
  template?:  Template;
  operation?: Operation;
  eventID?:   string;

}
