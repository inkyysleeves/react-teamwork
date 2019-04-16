import React from 'react';

const ProfileCard = (props) => {
  const {
    avatar, login, location, repos, following,
  } = props.profile;

  return (
    <div>
      <img src={avatar} />
      <br />
      <h2>{login}</h2>
      <br />
      <h3>{location}</h3>
      <br />
      <h3>Repos: {repos}</h3>
      <br />
      <h3>Following: {following}</h3>
    </div>
  );

  return <div>pending</div>;
};


export default ProfileCard;
