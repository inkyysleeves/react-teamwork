import React, { Component } from 'react';
import Contributions from '../components/contribution-summary';
import ProfileCard from '../components/profile-card';


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
        console.log(data);
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
        <ProfileCard
          name={this.state.profileData.profile.login}
          avatar={this.state.profileData.profile.avatar}
          url={this.state.profileData.profile.url}
          repos={this.state.profileData.profile.repos}
          following={this.state.profileData.profile.following}
          location={this.state.profileData.profile.location}
          company={this.state.profileData.profile.company}
        />
        <Contributions
          totalContributions={this.state.profileData.contributions}
          events={this.state.profileData.events}
        />
      </div>
    );
  }
}

export default Profile;
