import React from 'react';

const url = 'https://mcr-codes-cohorts.herokuapp.com/users/';

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
    };
  }

  componentDidMount() {
    fetch(`${url}${this.props.username}`)
      .then(response => response.json())
      .then(data => this.setState({ profile: data.profile }));
  }

  render() {
    const {
      avatar, login, location, repos, following,
    } = this.state.profile;

    if (login !== null) {
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
    }

    return <div>pending</div>;
  }
}

export default ProfileCard;
