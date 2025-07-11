import { ItemInterface } from "../../item/interfaces/ItemInterface";

export interface DepartmentInterface {
  number: number;
  description: string;
  items?:ItemInterface[];
}