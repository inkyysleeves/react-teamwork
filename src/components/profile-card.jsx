import React from 'react';

const url = 'https://mcr-codes-cohorts.herokuapp.com/users/';

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
    };
  }

  componentDidMount() {
    fetch(`${url}${this.props.username}`)
      .then(response => response.json())
      .then(data => this.setState({ profile: data.profile }));
  }
   
  
  render() {
    console.log(this.state);
  if (this.state.profile !== null) {
      return ( 
    <div>
      <img src={this.state.profile.avatar} />
      <br />
      <h2>{this.state.profile.login}</h2>
      <br />
      <h3>{this.state.profile.location}</h3>
      <br />
      <h3>Repos: {this.state.profile.repos}</h3>
      <br />
      <h3>Following: {this.state.profile.following}</h3>
    </div>
    );
  } else {
      return (<div>pending</div>)
  }
 } 
}

export default ProfileCard;
