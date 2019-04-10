import React, { Component } from 'react';
import ContributionSummary from '../components/contribution-summary';
import ProfileCard from '../components/profile-card';
import RepoList from '../components/repo-list';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.match.params.username,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h2>This is the profile for: {this.state.username}</h2>
        <ProfileCard />
        <RepoList />
        <ContributionSummary />
      </div>
    );
  }
}

export default Profile;
