import React, { Component } from "react";

import "./App.css";

import UserCard from "./components/UserCard/UserCard";

const users = ["bugbountychrisg8691", "pry0cc", "tomnomnom", "jhaddix"];

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>GitHub User Cards with React</h1>
        <UserCard user={users[0]} />
      </React.Fragment>
    );
  }
}

export default App;
