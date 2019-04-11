import React from 'react';

class Contribution extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contributions: null,
      pushEvents: [],
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
        console.log(data);
        this.setState({ pushEvents: data.events });
      });
  }


  render() {
    const { contributions } = this.state;
    console.log(this.state.pushEvents);
    return this.state.contributions ? (
      <div>
        <p>
           Contribution Summary for: {this.props.username}
        </p>
        <p>
           total {contributions} contributions.
        </p>
        <p>
          {contributions} contributions in the last month.
        </p>
        <p>
          {contributions} contributions in the last week.
        </p>
      </div>
    ) : (
      <div>
          LOADING
      </div>
    );
  }
}

export default Contribution;
