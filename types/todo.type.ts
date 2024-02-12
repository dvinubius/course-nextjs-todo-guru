import { Label } from "./label.type";

export type Todo = {
  id: string;
  name: string;
  description: string;
  labels?: Label[];
}