import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

import UserListItem from "../../components/UserListItem";
import { searchUsers, getUsers, getRateLimit } from "../../api/api";
import { UserType, RateLimitType, RateLimitResponseType } from "./types";

import styles from "./index.module.css";

const UserList = () => {
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );
  const [rateLimit, setRateLimit] = useState<RateLimitType>();
  const [error, setError] = useState(false);

  const usersQuery = useQuery("users", getUsers);

  const usersFilterQuery = useQuery(
    ["users", userName],
    () => searchUsers(userName),
    { enabled: userName !== "" }
  );

  let users: UserType[] = [];
  if (userName === "") {
    if (usersQuery.data) {
      users = usersQuery.data.data;
    } else {
      users = [];
    }
  } else {
    if (usersFilterQuery.data) {
      users = usersFilterQuery.data.data.items;
    } else {
      users = [];
    }
  }

  useEffect(() => {
    const getRateLimitData = async () => {
      try {
        const rateResponse = await getRateLimit();
        const rate: RateLimitResponseType = rateResponse.data;
        setRateLimit(rate.resources.core);
        if (rate.resources.core.remaining < 1) {
          setError(true);
        }
      } catch (error) {}
    };
    getRateLimitData();
  }, []);

  return (
    <div className={styles.UserLists}>
      <input
        type="text"
        name="username"
        value={userName}
        onChange={(e) => {
          localStorage.setItem("userName", e.target.value);
          setUserName(e.target.value);
        }}
      />
      {usersQuery.isLoading && <div>Loading...</div>}
      {error && <div>You are reached out to Search Limit</div>}
      {users && users.map((user) => <UserListItem user={user} key={user.id} />)}
    </div>
  );
};

export default UserList;
