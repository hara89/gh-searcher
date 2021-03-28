import { UserType } from "../UserLists/types";

export type RepoType = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: UserType;
  forks_count: number;
  stargazers_count: number;
};
