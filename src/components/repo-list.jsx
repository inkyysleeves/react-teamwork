import React from 'react';
import RepoCard from './repo-card';

const name = 'tbilbe';

class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };

  }
  goGetFetch() {
    const DATA_URL = `https://mcr-codes-cohorts.herokuapp.com/users/${name}`;
    fetch(DATA_URL)
      .then(res => res.json())
      .then(data => { return this.setState({ data });
    });
  }

  handleButtonClick = (props) => {
    const DATA_URL = `https://mcr-codes-cohorts.herokuapp.com/users/${name}`;
    console.log(this)
    this.goGetFetch() 
  }

  // componentDidMount() {
  //   const DATA_URL = `https://mcr-codes-cohorts.herokuapp.com/users/${name}`;
  //   fetch(DATA_URL)
  //     .then(res => res.json())
  //     .then(data => {
  //       return this.setState({ data });
  //     });
  // }

  render() {
    const { repos } = this.state.data;
    return (
      <div>
        <button onClick={this.handleButtonClick}>Click meee!</button>
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
      </div>
      
    );
  }
}

export default RepoList;
