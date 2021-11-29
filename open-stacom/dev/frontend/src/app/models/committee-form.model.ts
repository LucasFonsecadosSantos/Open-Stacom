import { Committee } from "."
import { Operation } from "../enums"

export class CommitteeForm {

  name?: string;
  committee?: Committee;
  operation?: Operation;
  picture?: string;

}
