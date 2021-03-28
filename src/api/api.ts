import axios from "axios";
export const GITHUB_API = "https://api.github.com/";

export const getUsers = async () => {
  const apiUrl = `${GITHUB_API}users`;

  const response = await axios(apiUrl, {
    method: "GET"
  });

  return response;
};

export const getUser = async (username: string) => {
  const apiUrl = `${GITHUB_API}users/${username}`;
  const response = await axios(apiUrl, {
    method: "GET"
  });

  return response;
};

export const getUserRepos = async (username: string) => {
  const apiUrl = `${GITHUB_API}users/${username}/repos?per_page=100`;
  const response = await axios(apiUrl, {
    method: "GET"
  });

  return response;
};

export const searchUsers = async (query: string) => {
  const apiUrl = `${GITHUB_API}search/users?q=${query}`;
  const response = await axios(apiUrl, {
    method: "GET"
  });

  return response;
};

export const getRateLimit = async () => {
  const apiUrl = `${GITHUB_API}rate_limit`;
  const response = await axios(apiUrl, {
    method: "GET"
  });

  return response;
};
