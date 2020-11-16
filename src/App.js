import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = {
    users: [],
  };

  render() {
    return (
      <div>
        <h1>This is a react app!</h1>
      </div>
    );
  }
}