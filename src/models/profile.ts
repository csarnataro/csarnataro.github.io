import { Repo } from "./repo";

export type Profile = {
  name: string;
  bio?: string;
  avatar?: string;
  location?: string;
  company?: string;
  repos?: Repo[];
}