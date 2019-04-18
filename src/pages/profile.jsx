import React, { Component } from 'react';
import ContributionSummary from '../components/contribution-summary';
import ProfileCard from '../components/profile-card';
import RepoList from '../components/repo-list';

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
        <ProfileCard username={username} profile={this.state.profileData.profile} />
        <RepoList username={username} repos={this.state.profileData.repos} />
        <ContributionSummary username={username} events={this.state.profileData.events} contributions={this.state.profileData.contributions} />
      </div>
    );
  }
}

export default Profile;
