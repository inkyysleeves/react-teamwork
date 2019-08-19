import React, { Component } from 'react';
import Contributions from '../components/contribution-summary';

const URL = 'https://mcr-codes-cohorts.herokuapp.com/users/';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.match.params.username,
      profileData: {},
    };
  }

  componentDidMount() {
    fetch(`${URL}${this.state.username}`)
      .then(res => res.json())
      .then(data => {
        return this.setState({ profileData: data });
      });
  }

  render() {
    const { username } = this.state;
    if (!this.state.profileData.repos) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Contributions
          totalContributions={this.state.profileData.contributions}
          events={this.state.profileData.events}
          repos={this.state.profileData.repos}
        />
      </div>
    );
  }
}

export default Profile;
