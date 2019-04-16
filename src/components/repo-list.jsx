import React from 'react';
import RepoCard from './repo-card';

const URL = 'https://mcr-codes-cohorts.herokuapp.com/users/';

class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: null,
    };
  }

  componentDidMount() {
    fetch(`${URL}${this.props.username}`)
      .then(res => res.json())
      .then(data => {
        return this.setState({ repos: data.repos });
      });
  }

  render() {
    const { repos } = this.state;

    if (!repos) {
      return <div>loading</div>;
    }

    return (
      <div>{ repos.map((repo) => {
        return (
          <RepoCard
            key={repo.name}
            name={repo.name}
            description={repo.description}
            language={repo.language}
            stars={repo.watchers}
            forks={repo.forks}
          />
        );
      })}
      </div>
    );
  }
}

export default RepoList;
