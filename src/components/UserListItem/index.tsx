import React from "react";
import { useHistory } from "react-router-dom";

import { IProps } from "./types";
import styles from "./index.module.css";

const UserListItem = (props: IProps) => {
  const { user } = props;
  const history = useHistory();

  const handleOnClick = (login: string) => {
    history.push(`/${login}`);
  };

  return (
    <div
      className={styles.UserListItem}
      onClick={() => handleOnClick(user.login)}
    >
      <img src={user.avatar_url} alt="" />
      <h3>{user.login}</h3>
    </div>
  );
};

export default UserListItem;
