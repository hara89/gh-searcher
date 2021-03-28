import React from "react";

import { IProps } from "./types";
import styles from "./index.module.css";

const RepoItem = (props: IProps) => {
  const { repo } = props;

  return (
    <div className={styles.RepoItem}>
      <p>{repo.name}</p>
      <div>
        <p>{repo.forks_count} Forks</p>
        <p>{repo.stargazers_count} Stars</p>
      </div>
    </div>
  );
};

export default RepoItem;
