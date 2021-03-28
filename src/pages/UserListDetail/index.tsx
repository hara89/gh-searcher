import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import RepoItem from "../../components/RepoItem";
import { getUser, getUserRepos } from "../../api/api";
import { UserType } from "../UserLists/types";
import { RepoType } from "./types";

import styles from "./index.module.css";

const UserListDetail = () => {
  const { user } = useParams<{ user: string }>();
  const [repoName, setRepoName] = useState("");

  const userQuery = useQuery(["user", user], () => getUser(user), {
    enabled: !!user
  });

  let userData: UserType | null = null;

  if (userQuery.data) {
    userData = userQuery.data.data;
  }

  const userRepoQuery = useQuery(
    ["userRepos", user],
    () => getUserRepos(user),
    {
      enabled: !!user
    }
  );

  let userRepos: RepoType[] = [];

  if (userRepoQuery.data) {
    userRepos = userRepoQuery.data.data;
  }

  return (
    <div className={styles.UserListDetailContainer}>
      {userQuery.isLoading && <div>Loading...</div>}
      {userData && (
        <>
          <div className={styles.UserDetail}>
            <img src={userData.avatar_url} alt="" />
            <div className={styles.UserDetailDescription}>
              <p>{userData.name}</p>
              <p>{userData.email}</p>
              <p>{userData.location}</p>
              <p>
                {new Date(userData.created_at).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                })}
              </p>
              <p>{userData.followers} Followers</p>
              <p>Following {userData.following}</p>
              <p>{userData.name}</p>
            </div>
          </div>
          <p style={{ textAlign: "center" }}>
            This is their biography. It may be long and needs to all fit
          </p>
          <input
            type="text"
            placeholder="Search for User's Repositories"
            value={repoName}
            onChange={(e) => setRepoName(e.target.value)}
          />
          {userRepos &&
            userRepos
              .filter((repo) =>
                repo.name.toLowerCase().includes(repoName.toLowerCase())
              )
              .map((repo) => <RepoItem repo={repo} key={repo.id} />)}
        </>
      )}
    </div>
  );
};

export default UserListDetail;
