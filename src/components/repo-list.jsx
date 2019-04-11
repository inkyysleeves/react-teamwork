import React from 'react';
import RepoCard from './repo-card';

const name = 'jackpearsall';

class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    const DATA_URL = `https://mcr-codes-cohorts.herokuapp.com/users/${name}`;
    fetch(DATA_URL)
      .then(res => res.json())
      .then(data => {
        return this.setState({ data });
      });
  }

  render() {
    const { repos } = this.state.data;
    return (
      <div>{ !repos ? <div>loading</div> : repos.map((repo, index) => {
        return (
          <RepoCard
            key={index} 
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
