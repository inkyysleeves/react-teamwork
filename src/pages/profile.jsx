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
    const { username } = this.state;

    return (
      <div>
        <ProfileCard username={username} />
        <RepoList username={username} />
        <ContributionSummary username={username} />
      </div>
    );
  }
}

export default Profile;
