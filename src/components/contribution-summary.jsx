import React from 'react';

class Contribution extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contributions: null,
      pushEvents: [],
      pullRequests: [],
    };
  }

  componentDidMount() {
    fetch(`https://mcr-codes-cohorts.herokuapp.com/users/${this.props.username}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ contributions: data.contributions });
        return data;
      })
      .then(data => {
        this.setState({ pushEvents: data.events.filter(event => event.type === 'PushEvent') });
        return data;
      })
      .then(data => {
        this.setState({ pullRequests: data.events.filter(event => event.type === 'PullRequestEvent')});
      });
  }


  render() {
    const { contributions } = this.state;
    console.log(this.state.pushEvents);
    return this.state.contributions ? (
      // this.state.pushEvents.filter()
      <div>
        <h1>
           Contribution Summary for: {this.props.username}
        </h1>
        <h2>
          {this.props.username} Has made a total of {contributions} contributions!
        </h2>
        <h2>
          {this.state.pushEvents.length} of which were Push events!
        </h2>
        <h2>
          And, {this.state.pullRequests.length} Pull Request(s)!
        </h2>
      </div>
    ) : (
      <div>
          LOADING
      </div>
    );
  }
}

export default Contribution;
