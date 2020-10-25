import React, { Component } from "react";
import Axios from "axios";

import "./UserCard.css";

import { BASE_URL, CORS } from "../../constants";

class UserCard extends Component {
  constructor() {
    super();
    this.state = {
      userDetails: [],
    };
  }

  componentDidMount() {
    Axios.get(`${BASE_URL}/users/${this.props.user}`)
      .then((resp) => this.setState({ userDetails: resp.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="user-card">
        <img src={this.state.userDetails.avatar_url} alt="user photo" />
        <h3>Name: {this.state.userDetails.name}</h3>
        <h3>Username: {this.state.userDetails.login}</h3>
        <ul>
          <li>
            <h5>Location: </h5> <p>{this.state.userDetails.location}</p>
          </li>
          <li>
            <h5>Followers: </h5> <p>{this.state.userDetails.followers}</p>
          </li>
          <li>
            <h5>Following: </h5> <p>{this.state.userDetails.following}</p>
          </li>
          <li>
            <h5>Repo Count: </h5> <p>{this.state.userDetails.public_repos}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default UserCard;
