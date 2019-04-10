import React from 'react';
import RepoCard from './repo-card';

const RepoList = (props) => (
  <div>
    <p>Repo List for: {props.username}</p>
    <ul>
      <RepoCard username={props.username} />
      <RepoCard username={props.username} />
      <RepoCard username={props.username} />
    </ul>
  </div>
);

export default RepoList;
