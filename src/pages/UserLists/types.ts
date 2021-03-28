export type UserType = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};

export type RateLimitType = {
  limit: number;
  remaining: number;
  reset: number;
};

export type RateLimitResponseType = {
  resources: {
    core: RateLimitType;
    search: RateLimitType;
    graphql: RateLimitType;
    integration_mainfest: RateLimitType;
    code_scanning_upload: RateLimitType;
  };
  rate: RateLimitType;
};
