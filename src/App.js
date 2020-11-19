import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch('/application')
      .then(response => {
        console.log(response)
        response.json();
      })
      .then(data => console.log(data));
  }
 
  render() {
    return (
      <div>
        <form></form>
        <content></content>
      </div>
    );
  }
}