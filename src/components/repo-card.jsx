import React from 'react';

const RepoCard = props => {
  return (
    <div>
      <li>Repo Name: {props.name}</li>
      <li>
        Repo Description:{' '}
        {!props.description ? (
          <span>There is no description</span>
        ) : (
          props.description
        )}
      </li>
      <li>Repo Language: {props.language}</li>
      <li>Repo Stars: {props.stars}</li>
      <li>Repo Forks: {props.forks}</li>
    </div>
  );
};

export default RepoCard;
