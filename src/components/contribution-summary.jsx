import React from 'react';

const URL = 'https://mcr-codes-cohorts.herokuapp.com/users/';

class Contribution extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contributions: null,
      pushEvents: [],
      pullRequests: [],
      error: false,
    };
  }

  componentDidMount() {
    fetch(`${URL}${this.props.username}`)
      .then(response => response.json())
      .then(data => {
        const pushEvents = data.events.filter(event => event.type === 'PushEvent');
        const pullRequests = data.events.filter(event => event.type === 'PullRequestEvent');
        this.setState({
          pushEvents,
          pullRequests,
          contributions: data.contributions,
        });
      })
      .catch(error => {
        this.setState({
          error: error,
        });
      });
  }

  render() {
    const {
      contributions, pushEvents, pullRequests, error,
    } = this.state;
    const { username } = this.props;

    if (error) {
      return <div>Sorry, could not load contribution data. Please reload.</div>;
    }

    if (contributions === null) {
      return <div>LOADING</div>;
    }

    return (
      <div>
        <h1>Contribution Summary for: {username}</h1>
        <h2>
          {username} Has made a total of {contributions} contributions!
        </h2>
        <h2>
          {pushEvents.length} of which were Push event
          {pushEvents.length > 1 && 's'}!
        </h2>
        <h2>
          And, {pullRequests.length} Pull Request
          {pullRequests.length > 1 && 's'}!
        </h2>
      </div>
    );
  }
}

export default Contribution;
